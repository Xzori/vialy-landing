# Audit Design System - Landing Page vs App Principale

**Date** : 05 janvier 2026

---

## 📊 Vue d'ensemble

Ce document compare le design system de la landing page Vialy avec celui de l'application principale pour identifier les incohérences et proposer une harmonisation.

---

## 🎨 Couleurs

### App Principale (Référence)
Fichier : `Vialy v1 (Rémi)/src/styles/globals.css:46-52`

```css
--app-primary: #8CC5DB;         /* Bleu principal */
--app-primary-dark: #7AB5CB;    /* Bleu foncé */
--app-primary-light: #A8D5E6;   /* Bleu clair */
--app-secondary: #F66F62;       /* Coral/Rouge */
--app-secondary-dark: #E55F52;  /* Coral foncé */
```

### Landing Page (Actuel)
Fichier : `vialy-landing/src/styles/globals.css:46-50`

```css
--vialy-blue: #8CC6DC;           /* Bleu principal */
--vialy-coral: #F37466;          /* Coral/Rouge */
--vialy-blue-light: #B8DFE9;     /* Bleu clair */
--vialy-coral-light: #F89F8F;    /* Coral clair */
```

---

## ⚠️ INCOHÉRENCES IDENTIFIÉES

### 1. Couleur Primaire (Bleu)

| Projet | Valeur | Fichier | Ligne |
|--------|--------|---------|-------|
| **App** | `#8CC5DB` | globals.css | 47 |
| **Landing** | `#8CC6DC` | globals.css | 47 |

**Impact** : Différence minime mais visible (B vs C en fin de code hex)
**Recommandation** : ✅ **Aligner sur l'app : `#8CC5DB`**

---

### 2. Couleur Secondaire (Coral/Rouge) ⚠️ CRITIQUE

| Projet | Valeur | Fichier | Ligne |
|--------|--------|---------|-------|
| **App** | `#F66F62` | globals.css | 50 |
| **Landing** | `#F37466` | globals.css | 48 |

**Impact** : **DIFFÉRENCE NOTABLE** - Teintes visiblement différentes
**Recommandation** : ✅ **Aligner sur l'app : `#F66F62`**

---

### 3. Variantes de couleurs

#### Bleu Clair

| Projet | Valeur |
|--------|--------|
| **App** | `#A8D5E6` |
| **Landing** | `#B8DFE9` |

**Impact** : Nuances différentes
**Recommandation** : ✅ Aligner sur l'app

#### Coral Clair

| Projet | Valeur | Existe ? |
|--------|--------|----------|
| **App** | `#E55F52` (dark) | ✅ |
| **Landing** | `#F89F8F` (light) | ✅ |

**Impact** : L'app n'a pas de variante "light", la landing n'a pas de "dark"
**Recommandation** : Ajouter les deux variantes partout

---

## 📝 Nommage des Variables

### App Principale
```css
--app-primary
--app-primary-dark
--app-primary-light
--app-secondary
--app-secondary-dark
```

### Landing Page
```css
--vialy-blue
--vialy-coral
--vialy-blue-light
--vialy-coral-light
```

**Problème** : Nommage incohérent
**Recommandation** : ✅ **Uniformiser le nommage**

Options :
1. **Option A** : Tout en `--vialy-*` (plus sémantique)
2. **Option B** : Tout en `--app-*` (actuel de l'app)
3. **Option C (Recommandé)** : `--color-primary`, `--color-secondary` (standard Design System)

---

## 🔤 Typographie

### Police

| Aspect | App | Landing |
|--------|-----|---------|
| **Famille** | Poppins | Poppins ✅ |
| **Poids disponibles** | 400, 500, 600, 700, **900** | **300**, 400, 500, 600, 700 |

**Problème** : Poids de police différents
- Landing a `300` (light)
- App a `900` (black)

**Recommandation** : ✅ **Charger tous les poids : 300, 400, 500, 600, 700, 900**

---

### Import Google Fonts

**App :**
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;900&display=swap');
```

**Landing :**
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
```

**Recommandation :** Harmoniser sur `300;400;500;600;700;900`

---

## 🛠️ Utilisation dans le code

### Landing Page - Problème majeur

**Couleurs hardcodées partout** au lieu d'utiliser les variables :

Exemples trouvés :
- `src/components/Hero.tsx` : `bg-[#8CC6DC]`, `text-[#F37466]`
- `src/components/Features.tsx` : `color: "#8CC6DC"`, `color: "#F37466"`
- `src/components/About.tsx`, `Navigation.tsx`, etc.

**Impact** : ❌ Si on change les couleurs dans les variables, rien ne change visuellement
**Recommandation** : ✅ **Remplacer TOUTES les couleurs hardcodées par les variables CSS**

---

## 📐 Autres différences

### Border Radius

| Projet | Variable | Valeur |
|--------|----------|--------|
| **App** | `--radius` | `0.625rem` (10px) ✅ |
| **Landing** | `--radius` | `0.625rem` (10px) ✅ |

✅ **Identique**

### Animations

**App** : Pas d'animations custom détectées
**Landing** : Animation `@keyframes float` dans `globals.css:202-209`

✅ **Aucun conflit**

---

## 🎯 PLAN D'HARMONISATION

### Priorité 1 : Corriger les couleurs (CRITIQUE)

1. **Aligner les couleurs sur l'app principale**
   - Bleu principal : `#8CC5DB` (au lieu de `#8CC6DC`)
   - Coral : `#F66F62` (au lieu de `#F37466`)
   - Bleu clair : `#A8D5E6` (au lieu de `#B8DFE9`)

2. **Ajouter les variantes manquantes**
   - Ajouter `--vialy-coral-dark: #E55F52` dans landing
   - (Optionnel) Ajouter `--app-primary-lighter` dans app si besoin

3. **Uniformiser le nommage des variables**
   - Renommer `--vialy-*` en `--color-primary-*` et `--color-secondary-*` pour cohérence

### Priorité 2 : Remplacer les couleurs hardcodées

**Fichiers à modifier :**
- `src/components/Hero.tsx`
- `src/components/About.tsx`
- `src/components/Features.tsx`
- `src/components/AppScreens.tsx`
- `src/components/Community.tsx`
- `src/components/MapExplorer.tsx`
- `src/components/CTAFooter.tsx`
- `src/components/Navigation.tsx`

**Remplacements** :
```css
/* Avant */
.bg-\[#8CC6DC\] { background-color: #8cc6dc; }

/* Après */
.bg-vialy-primary { background-color: var(--vialy-blue); }
```

### Priorité 3 : Harmoniser la typographie

1. **Charger tous les poids Poppins**
   ```css
   @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;900&display=swap');
   ```

2. **Documenter l'usage des poids**
   - 300 (Light) : Sous-titres légers
   - 400 (Regular) : Corps de texte
   - 500 (Medium) : Labels, boutons
   - 600 (Semibold) : Titres secondaires
   - 700 (Bold) : Titres principaux
   - 900 (Black) : Hero titles, très important

---

## 📋 Checklist d'harmonisation

### Variables CSS
- [ ] Changer `--vialy-blue: #8CC6DB`
- [ ] Changer `--vialy-coral: #F66F62`
- [ ] Changer `--vialy-blue-light: #A8D5E6`
- [ ] Ajouter `--vialy-blue-dark: #7AB5CB`
- [ ] Ajouter `--vialy-coral-dark: #E55F52`
- [ ] (Optionnel) Renommer en `--color-primary-*` / `--color-secondary-*`

### Typographie
- [ ] Mettre à jour import Google Fonts avec tous les poids
- [ ] Vérifier cohérence font-weight dans les composants

### Code Components
- [ ] Hero.tsx : Remplacer couleurs hardcodées
- [ ] About.tsx : Remplacer couleurs hardcodées
- [ ] Features.tsx : Remplacer couleurs hardcodées
- [ ] AppScreens.tsx : Remplacer couleurs hardcodées
- [ ] Community.tsx : Remplacer couleurs hardcodées
- [ ] MapExplorer.tsx : Remplacer couleurs hardcodées
- [ ] CTAFooter.tsx : Remplacer couleurs hardcodées
- [ ] Navigation.tsx : Remplacer couleurs hardcodées

### Tests
- [ ] Vérifier rendu visuel sur localhost
- [ ] Comparer avec app principale côte à côte
- [ ] Valider sur mobile
- [ ] Pusher et tester sur Vercel preview

---

## 🔍 Méthode de vérification

### Trouver toutes les couleurs hardcodées

```bash
# Dans vialy-landing/
grep -r "#8CC6DC" src/
grep -r "#8CC6db" src/
grep -r "#F37466" src/
grep -r "#F66F62" src/
grep -r "#B8DFE9" src/
grep -r "#F89F8F" src/
```

### Comparaison visuelle

1. Ouvrir app principale : `cd "Vialy v1 (Rémi)" && npm run dev`
2. Ouvrir landing page : `cd vialy-landing && npm run dev`
3. Comparer les couleurs côte à côte

---

## 📝 Notes

- La landing page utilise massivement Tailwind avec couleurs hardcodées (`bg-[#8CC6DC]`)
- L'app principale utilise les variables CSS de manière plus cohérente
- Le nommage `--vialy-*` est plus sémantique que `--app-*`
- Considérer l'utilisation de Tailwind config pour définir les couleurs custom

---

**Prochaines étapes recommandées** :
1. Valider ce plan avec l'équipe/le designer
2. Appliquer les corrections par ordre de priorité
3. Créer des composants utilitaires réutilisables (Button, Card, etc.)
4. Documenter le design system final dans un Storybook ou Figma

---

**Dernière mise à jour** : 05 janvier 2026
