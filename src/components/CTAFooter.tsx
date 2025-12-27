import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Instagram, Twitter, Facebook, Mail, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import logoVialy from "figma:asset/9ef533a049266054c006b97c7fbeb9dba0ba9d7c.png";

export function CTAFooter() {
  const [email, setEmail] = useState("");
const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [resetTimer, setResetTimer] = useState<number | null>(null);

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!email) return;
   if (resetTimer) {
     window.clearTimeout(resetTimer);
      setResetTimer(null);
   }

  setStatus("loading");

  try {
    const r = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (!r.ok) throw new Error();

    setStatus("success");
    setEmail("");

    const t = window.setTimeout(() => setStatus("idle"), 5000);
    setResetTimer(t);
  } catch {
    setStatus("error");
  }
};

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="relative overflow-hidden">
      {/* CTA Section */}
      <section id="download" className="py-24 bg-gradient-to-br from-[#F37466] via-[#F37466]/90 to-[#8CC6DC] text-white relative scroll-mt-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block px-4 py-2 bg-white/20 rounded-full mb-2">
              <span className="text-white">🚀 Lancement imminent</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl tracking-tight">
              Sois parmi les premiers à explorer ta ville autrement
            </h2>
            
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Inscris-toi à la liste d'attente et sois averti(e) dès le lancement de Vialy. Accès anticipé garanti pour les premiers inscrits !
            </p>
            
            {status !== "success" ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto pt-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="ton.email@exemple.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === "error") setStatus("idle");
                    }}
                    required
                    disabled={status === "loading"}
                    className="flex-1 px-6 py-6 rounded-2xl bg-white/95 border-0 text-gray-900 placeholder:text-gray-500"
                  />
                 <Button
                   type="submit"
                   disabled={status === "loading"}
                   className="bg-white hover:bg-white/90 text-[#F37466] px-8 py-6 rounded-2xl whitespace-nowrap"
                >
                   <Mail className="mr-2 h-5 w-5" />
                   {status === "loading" ? "..." : "Rejoindre la liste"}
                 </Button>
                </div>

                {status === "error" ? (
                <p className="mt-3 text-sm text-white/90">
                  Une erreur est survenue. Réessaie dans un instant.
                </p>
              ) : null}
              </form>
            ) : (
              <div className="max-w-md mx-auto pt-4 bg-white/20 rounded-2xl p-6">
                <div className="flex items-center justify-center gap-3 text-white">
                  <CheckCircle2 className="h-6 w-6" />
                  <p className="text-lg">Merci ! Tu es bien inscrit(e) 🎉</p>
                </div>
              </div>
            )}

            <div className="pt-6">
              <p className="text-sm opacity-75">
                📱 Disponible prochainement sur iOS et Android
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <section className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img 
                  src={logoVialy} 
                  alt="Vialy Logo" 
                  className="w-12 h-12 rounded-2xl"
                />
                <h3 className="text-3xl">Vialy</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Transforme tes marches en aventures personnalisées grâce à l'IA.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="mb-4">Produit</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <button 
                    onClick={() => scrollToSection('fonctionnalites')}
                    className="hover:text-white transition-colors"
                  >
                    Fonctionnalités
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('parcours')}
                    className="hover:text-white transition-colors"
                  >
                    Parcours
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('communaute')}
                    className="hover:text-white transition-colors"
                  >
                    Communauté
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4">Entreprise</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">À propos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carrières</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4">Légal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Confidentialité</a></li>
                <li><a href="#" className="hover:text-white transition-colors">CGU</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mentions légales</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Vialy. Tous droits réservés.
            </p>
            
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-[#8CC6DC] rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-[#8CC6DC] rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-[#8CC6DC] rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
