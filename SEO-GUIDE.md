# Guide SEO - Vialy Landing Page

Ce document liste toutes les optimisations SEO appliquées à la landing page Vialy pour maximiser sa visibilité dans les moteurs de recherche.

## ✅ Optimisations appliquées

### 1. Meta Tags de base
- **Title optimisé** : "Vialy - Balades personnalisées à Paris | Découverte urbaine interactive"
- **Meta description** : Description engageante avec mots-clés principaux
- **Meta keywords** : balade paris, parcours piéton, découverte urbaine, promenade personnalisée, visite paris, etc.
- **Canonical URL** : Défini pour éviter le contenu dupliqué

### 2. Open Graph (Facebook, LinkedIn)
- `og:type`: website
- `og:title`, `og:description`: Optimisés pour partage social
- `og:image`: Image de preview (⚠️ À créer : `/public/og-image.jpg` 1200x630px)
- `og:locale`: fr_FR
- `og:site_name`: Vialy

### 3. Twitter Cards
- `twitter:card`: summary_large_image
- `twitter:title`, `twitter:description`: Optimisés
- `twitter:image`: Image de preview (même que OG)

### 4. Structured Data (Schema.org)
Type: **MobileApplication**
```json
{
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "name": "Vialy",
  "description": "Application de balades à pied personnalisées à Paris",
  "applicationCategory": "TravelApplication",
  "operatingSystem": "Web, iOS, Android"
}
```

### 5. Fichiers techniques
- ✅ **sitemap.xml** : Mis à jour avec lastmod, changefreq, priority
- ✅ **robots.txt** : Configuré pour autoriser les crawlers

### 6. Performance & PWA
- **Theme color** : #8CC5DB (couleur principale Vialy)
- **Favicon** : SVG pour meilleure qualité
- **Apple touch icon** : Pour iOS

---

## 🚨 Actions requises

### Images manquantes
Créer les images suivantes dans `/public/` :

1. **og-image.jpg** (1200x630px)
   - Image de preview pour réseaux sociaux
   - Doit contenir : Logo Vialy + texte "Balades personnalisées à Paris"
   - Format : JPG optimisé (< 300KB)

2. **favicon.svg**
   - Logo Vialy au format SVG
   - Taille : 32x32px minimum

3. **apple-touch-icon.png** (180x180px)
   - Logo Vialy pour iOS home screen
   - Format : PNG avec fond de couleur

### Recommandations après déploiement

#### 1. Google Search Console
- ✅ Déjà vérifié (meta tag présent)
- Soumettre le sitemap : `https://vialy-landing.vercel.app/sitemap.xml`
- Surveiller l'indexation des pages
- Vérifier les erreurs d'exploration

#### 2. Google Analytics (optionnel)
Ajouter Google Analytics 4 pour suivre :
- Nombre de visiteurs
- Taux de rebond
- Conversions (clics sur CTA)

```html
<!-- À ajouter dans index.html si souhaité -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

#### 3. Mettre à jour l'URL canonique
Si vous déployez sur un domaine personnalisé (ex: vialy.com), mettre à jour :
- `index.html` ligne 13 : canonical URL
- `public/robots.txt` ligne 5 : sitemap URL
- `public/sitemap.xml` ligne 4 : loc URL
- Toutes les meta Open Graph et Twitter

#### 4. Optimisations de contenu

**Mots-clés principaux à cibler :**
- Balade Paris
- Parcours piéton Paris
- Visite guidée Paris
- Découverte urbaine
- Promenade personnalisée
- Itinéraire touristique Paris

**Recommandations :**
- Ajouter un blog avec articles sur les balades à Paris (bonus SEO)
- Créer des pages pour chaque quartier de Paris (Montmartre, Marais, etc.)
- Ajouter des témoignages utilisateurs avec schema Review
- Intégrer une FAQ avec schema FAQPage

#### 5. Performance Lighthouse

**Objectifs :**
- Performance : > 90
- Accessibilité : > 90
- Best Practices : 100
- SEO : 100

**Commande pour tester :**
```bash
npm run build
npx lighthouse https://vialy-landing.vercel.app --view
```

#### 6. Backlinks & Autorité

**Stratégies pour améliorer le référencement :**
- Partenariats avec blogs tourisme Paris
- Articles invités sur sites de voyage
- Inscription sur annuaires (Google Business, Yelp, TripAdvisor)
- Réseaux sociaux actifs (Instagram, Facebook avec liens vers landing)

---

## 📊 Checklist SEO finale

Avant lancement :
- [ ] Créer og-image.jpg (1200x630px)
- [ ] Créer favicon.svg
- [ ] Créer apple-touch-icon.png (180x180px)
- [ ] Tester les meta tags avec https://metatags.io
- [ ] Vérifier les meta OG avec https://developers.facebook.com/tools/debug/
- [ ] Vérifier Twitter Card avec https://cards-dev.twitter.com/validator
- [ ] Tester Lighthouse score
- [ ] Soumettre sitemap à Google Search Console

Après déploiement :
- [ ] Vérifier indexation Google (recherche : site:vialy-landing.vercel.app)
- [ ] Configurer Google Analytics (optionnel)
- [ ] Suivre positionnement sur mots-clés cibles
- [ ] Obtenir premiers backlinks

---

## 🎯 Objectifs de positionnement

**Mots-clés prioritaires :**
1. "balade paris" (volume élevé)
2. "parcours piéton paris"
3. "visite guidée paris gratuit"
4. "application balade"
5. "découverte urbaine paris"

**Timeline réaliste :**
- Mois 1-2 : Indexation complète
- Mois 3-6 : Positionnement page 2-3 Google
- Mois 6-12 : Objectif page 1 sur mots-clés longue traîne
- Mois 12+ : Top 5 sur mots-clés principaux (avec backlinks)

---

## 📞 Support

Pour toute question SEO, consulter :
- [Google Search Central](https://developers.google.com/search)
- [Schema.org Documentation](https://schema.org)
- [Open Graph Protocol](https://ogp.me)
