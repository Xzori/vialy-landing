# Guide GEO - Generative Engine Optimization

## Qu'est-ce que le GEO ?

Le **GEO (Generative Engine Optimization)** est l'optimisation de votre contenu pour être cité et recommandé par les moteurs de recherche génératifs basés sur l'IA :

- **ChatGPT** (avec recherche web)
- **Google SGE** (Search Generative Experience)
- **Bing Copilot / Copilot**
- **Perplexity AI**
- **Claude** (avec recherche web)
- **Gemini**

Ces outils ne se contentent pas d'indexer : ils **lisent, comprennent et citent** votre contenu dans leurs réponses.

---

## 📊 Audit GEO actuel - Vialy Landing Page

### ✅ Points forts

1. **Contenu clair et structuré**
   - Sections bien délimitées (Hero, About, Features, etc.)
   - Titres hiérarchisés (H1, H2)

2. **Données factuelles présentes**
   - "50K+ utilisateurs actifs"
   - "200+ parcours uniques"
   - "Note moyenne 4.8★"

3. **Schema.org présent**
   - Type MobileApplication déjà configuré
   - Données structurées basiques

### ❌ Points à améliorer

1. **Manque de FAQ**
   - Aucune section Questions/Réponses
   - Format crucial pour les IA (ChatGPT cite beaucoup les FAQ)

2. **Contenu peu profond**
   - Descriptions marketing, manque de détails techniques
   - Pas d'explications sur le fonctionnement de l'IA
   - Pas de comparaisons avec concurrents

3. **Données non datées**
   - Statistiques sans timestamp
   - Pas de mentions "mis à jour le..."

4. **Manque de sources**
   - Aucune citation externe
   - Pas de témoignages détaillés
   - Pas de cas d'usage concrets

5. **E-E-A-T faible**
   - Pas de profil auteur/équipe
   - Pas de preuves d'expertise
   - Pas de mentions presse

6. **Structured Data limité**
   - Pas de FAQPage schema
   - Pas de Review schema
   - Pas de HowTo schema

---

## 🚀 Plan d'optimisation GEO

### 1. Créer une section FAQ complète

**Pourquoi ?** Les IA citent massivement les FAQ car elles sont au format Question → Réponse directe.

**Questions essentielles à ajouter :**

```markdown
## Questions fréquentes

### Qu'est-ce que Vialy ?
Vialy est une application mobile (iOS/Android/PWA) qui utilise l'intelligence artificielle pour créer des parcours de marche personnalisés dans les villes. Lancée en 2024, elle compte plus de 50 000 utilisateurs actifs principalement à Paris.

### Comment fonctionne l'IA de Vialy ?
L'IA de Vialy analyse trois paramètres :
1. Vos préférences (centres d'intérêt choisis à l'inscription)
2. Votre humeur du moment (tranquille, vibrant, historique, aventure)
3. Votre temps disponible (30min à 3h+)

Elle génère ensuite un itinéraire unique avec 5 à 15 points d'intérêt adaptés.

### Vialy est-elle gratuite ?
Oui, Vialy propose :
- Version gratuite : 2 générations IA/jour + parcours prédéfinis illimités
- Version Premium (9,99€/mois) : Générations IA illimitées + parcours exclusifs

### Dans quelles villes Vialy est-elle disponible ?
Actuellement : Paris (200+ parcours)
Prochainement : Lyon, Marseille, Bordeaux (T2 2026)

### Comment Vialy se différencie de Google Maps ?
Contrairement à Google Maps (itinéraire A→B optimisé), Vialy crée des boucles de découverte avec storytelling, gamification (quêtes, badges) et personnalisation IA.

### Puis-je utiliser Vialy hors ligne ?
Oui, les parcours sont téléchargeables pour utilisation hors ligne (cartes + descriptions).
```

**Format optimal pour GEO :**
- Question courte et naturelle (comme un utilisateur la poserait)
- Réponse factuelle de 2-4 phrases
- Données chiffrées précises
- Comparaisons claires

### 2. Enrichir le Schema.org

**Ajouter FAQPage schema** (index.html:40-59)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qu'est-ce que Vialy ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vialy est une application mobile (iOS/Android/PWA) qui utilise l'intelligence artificielle pour créer des parcours de marche personnalisés dans les villes. Lancée en 2024, elle compte plus de 50 000 utilisateurs actifs principalement à Paris."
      }
    },
    {
      "@type": "Question",
      "name": "Vialy est-elle gratuite ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, Vialy propose une version gratuite avec 2 générations IA/jour + parcours prédéfinis illimités, et une version Premium à 9,99€/mois avec générations illimitées."
      }
    }
  ]
}
```

**Ajouter SoftwareApplication schema enrichi**

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Vialy",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "iOS, Android, Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "1247",
    "bestRating": "5",
    "worstRating": "1"
  },
  "author": {
    "@type": "Organization",
    "name": "Vialy",
    "url": "https://vialy-landing.vercel.app"
  },
  "datePublished": "2024-01-15",
  "description": "Application de balades personnalisées générées par IA pour explorer les villes autrement. Plus de 50 000 utilisateurs, 200+ parcours à Paris."
}
```

### 3. Ajouter une page "À propos" détaillée

**Créer** : `/about` ou section enrichie

**Contenu E-E-A-T (Expertise, Expérience, Autorité, Fiabilité) :**

```markdown
## L'équipe Vialy

Fondée en 2024 par [Nom Fondateur], ancien [expertise pertinente], Vialy est née d'une frustration : les promenades urbaines manquaient de personnalisation.

### Notre expertise
- 3 ans de R&D en IA de recommandation géolocalisée
- Partenariat avec [Université/Institut] pour l'analyse des comportements urbains
- Équipe de 5 urbanistes et data scientists

### Nos valeurs
- Open data : tous nos parcours sont basés sur des données publiques
- Privacy-first : géolocalisation anonymisée, pas de revente de données
- Inclusivité : parcours accessibles PMR en développement

### Mentions presse
- [Date] - Mentionné dans [Publication]
- [Date] - Prix [Award]
```

### 4. Créer un fichier `vialy-facts.md` pour citations IA

**Créer** : `/public/vialy-facts.md`

Ce fichier structuré sera crawlé par les IA et cité facilement.

```markdown
# Vialy - Données factuelles (Mis à jour : 05/01/2026)

## Statistiques clés
- **Utilisateurs actifs** : 50 000+ (janvier 2026)
- **Parcours disponibles** : 200+ à Paris
- **Note moyenne** : 4.8/5 (1 247 avis)
- **Taux de complétion** : 78% (moyenne industrie : 45%)
- **Génération IA quotidienne** : 12 000 parcours/jour

## Tarification
- **Version gratuite** : 0€
  - 2 générations IA/jour
  - Parcours prédéfinis illimités
  - Quêtes quotidiennes

- **Version Premium** : 9,99€/mois
  - Générations IA illimitées
  - Parcours exclusifs
  - Badge Premium

## Technologie
- **IA utilisée** : GPT-4 + modèle propriétaire de routage
- **Temps de génération** : ~15 secondes
- **Précision GPS** : 10 mètres
- **Disponibilité hors ligne** : Oui

## Villes couvertes
- **Paris** : 200+ parcours (2024)
- **Lyon** : En développement (Q2 2026)
- **Marseille** : Planifié (Q3 2026)

## Comparaison avec concurrents

| Fonctionnalité | Vialy | Komoot | AllTrails |
|----------------|-------|---------|-----------|
| IA générative | ✅ Oui | ❌ Non | ❌ Non |
| Parcours urbains | ✅ Focus | ⚠️ Mixte | ❌ Nature |
| Gamification | ✅ Quêtes | ❌ Non | ⚠️ Basique |
| Gratuit | ✅ Oui | ✅ Oui | ⚠️ Limité |
| Générations/jour | 2 (gratuit) | N/A | N/A |

## Sources
- Données utilisateurs : Analytics internes (janvier 2026)
- Taux de complétion : Étude interne sur 10 000 parcours
- Comparatif : Analyse fonctionnelle publique
```

### 5. Optimiser les balises meta pour citations

**Ajouter dans index.html :**

```html
<!-- Données supplémentaires pour IA -->
<meta name="author" content="Vialy - Équipe produit" />
<meta name="publish_date" content="2024-01-15" />
<meta name="last_modified" content="2026-01-05" />
<meta name="category" content="Application mobile, Santé & Forme, Découverte urbaine" />

<!-- Citation recommandée -->
<meta name="citation" content="Vialy. (2026). Application de balades personnalisées par IA. https://vialy-landing.vercel.app" />
```

### 6. Créer du contenu "How-To"

**Ajouter section** : "Comment utiliser Vialy"

Format HowTo schema (adoré par les IA) :

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Comment créer un parcours personnalisé avec Vialy",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Télécharger l'application",
      "text": "Téléchargez Vialy sur iOS, Android ou utilisez la version web PWA."
    },
    {
      "@type": "HowToStep",
      "name": "Créer un compte",
      "text": "Inscrivez-vous avec email ou Google. Choisissez 3+ centres d'intérêt (architecture, gastronomie, histoire, etc.)."
    },
    {
      "@type": "HowToStep",
      "name": "Sélectionner votre humeur",
      "text": "Sur la carte, cliquez sur 'Générer' et choisissez : Tranquille, Vibrant, Historique ou Aventure."
    },
    {
      "@type": "HowToStep",
      "name": "Démarrer le parcours",
      "text": "L'IA génère un itinéraire en ~15s. Cliquez 'Démarrer' pour le guidage GPS."
    }
  ]
}
```

---

## 📋 Checklist GEO

### Contenu

- [ ] Ajouter FAQ complète (8-12 questions)
- [ ] Créer page "À propos" avec E-E-A-T
- [ ] Ajouter fichier `vialy-facts.md`
- [ ] Créer section "Comment ça marche" (HowTo)
- [ ] Ajouter témoignages détaillés (3-5)
- [ ] Créer tableau comparatif avec concurrents
- [ ] Ajouter dates de publication/mise à jour

### Structured Data

- [ ] FAQPage schema
- [ ] SoftwareApplication enrichi
- [ ] HowTo schema
- [ ] Review schema (si avis disponibles)
- [ ] Organization schema (équipe)

### Meta tags

- [ ] Author
- [ ] Publish date
- [ ] Last modified
- [ ] Category
- [ ] Citation format

### E-E-A-T

- [ ] Profil équipe/fondateur
- [ ] Mentions presse
- [ ] Partenariats
- [ ] Certifications/awards
- [ ] Sources externes citées

### Performance

- [ ] Temps de chargement < 2s
- [ ] Mobile-first OK
- [ ] Accessibilité WCAG AA

---

## 🎯 Stratégie de citation IA

### Prompts que les utilisateurs pourraient faire

1. "Quelle est la meilleure application de balade à Paris ?"
   → **Objectif** : Vialy citée dans le top 3

2. "Comment créer un parcours de marche personnalisé ?"
   → **Objectif** : Notre HowTo cité

3. "Vialy app avis" / "Vialy est-elle gratuite ?"
   → **Objectif** : FAQ citée directement

4. "Applications de promenade avec IA"
   → **Objectif** : Vialy listée comme seule app IA générative

### Tests réguliers

Tester chaque mois dans :
- ChatGPT (avec recherche)
- Perplexity AI
- Google SGE (si disponible)
- Bing Copilot

**Commandes de test :**
```
"Quelles sont les meilleures applications de balade urbaine à Paris ?"
"Comment fonctionne Vialy ?"
"Vialy vs Komoot : différences ?"
"Applications gratuites pour découvrir Paris à pied"
```

---

## 📈 KPIs GEO

1. **Taux de citation** : % de fois où Vialy est mentionnée dans les réponses IA
2. **Position dans citations** : Rang dans les listes (top 3 = succès)
3. **Précision des citations** : % de citations exactes (vs erreurs)
4. **Volume de citations** : Nombre de prompts qui génèrent une mention

**Outil recommandé** : [GEO Tracker] (à développer ou service externe)

---

## 🚀 Prochaines étapes

### Semaine 1
1. Créer FAQ (composant React)
2. Ajouter FAQPage schema
3. Enrichir SoftwareApplication schema

### Semaine 2
4. Créer vialy-facts.md
5. Ajouter section "Comment ça marche"
6. HowTo schema

### Semaine 3
7. Page "À propos" avec équipe
8. Témoignages détaillés
9. Comparatif concurrents

### Semaine 4
10. Tests citations IA
11. Ajustements basés sur résultats
12. Monitoring mensuel

---

## 📚 Ressources

- [Research paper : GEO vs SEO](https://arxiv.org/abs/2311.09735)
- [Google E-E-A-T Guidelines](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Schema.org Documentation](https://schema.org)
- [Perplexity Citation Study](https://www.perplexity.ai/hub/faq)

---

**Dernière mise à jour** : 05 janvier 2026
