import type { VercelRequest, VercelResponse } from "@vercel/node";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const email = String(body?.email || "").trim().toLowerCase();

    if (!email || !isValidEmail(email)) {
      return res.status(400).json({ ok: false, error: "Invalid email" });
    }

    const apiKey = process.env.BREVO_API_KEY;
    const listIdRaw = process.env.BREVO_LIST_ID;

    if (!apiKey || !listIdRaw) {
      return res.status(500).json({ ok: false, error: "Server not configured" });
    }

    const listId = Number(listIdRaw);
    if (!Number.isFinite(listId)) {
      return res.status(500).json({ ok: false, error: "Invalid list id" });
    }

    const brevoResp = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        email,
        listIds: [listId],
        updateEnabled: true,
      }),
    });

    if (!brevoResp.ok) {
      const text = await brevoResp.text();
      return res.status(400).json({ ok: false, error: "Brevo error", details: text });
    }

    return res.status(200).json({ ok: true });
  } catch {
    return res.status(500).json({ ok: false, error: "Server error" });
  }
}
