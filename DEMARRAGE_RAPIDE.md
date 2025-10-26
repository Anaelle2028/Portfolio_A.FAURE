# 🚀 Guide de Démarrage Rapide

## ⚡ Lancement Immédiat

### 1️⃣ Installer les dépendances (première fois uniquement)

```powershell
cd "c:\Users\anael\Documents\PMSC\Portfolio_A.FAURE\Portfolio"
npm install
```

### 2️⃣ Lancer le serveur de développement

```powershell
npm start
```

### 3️⃣ Ouvrir dans le navigateur

Ouvrez automatiquement ou allez sur : **http://localhost:4200**

---

## 📋 Ce que vous devez faire MAINTENANT

### ✅ Étape 1 : Vérifier que tout fonctionne

1. Lancez le portfolio avec `npm start`
2. Testez chaque page :
   - ✅ Accueil (/)
   - ✅ À propos (/about)
   - ✅ Projets (/projects)
   - ✅ Contact (/contact)
3. Testez la navigation entre les pages
4. Cliquez sur un projet pour voir le modal
5. Testez le formulaire de contact

### ✅ Étape 2 : Personnaliser vos informations

#### Dans `src/component/about/about.component.ts` :

```typescript
// Ligne 12-18 : Compétences
skills = [
  {
    category: "Front-end",
    items: ["Angular", "Vue.js", "TypeScript", "HTML5", "CSS3", "JavaScript"],
  },
  // Ajoutez vos compétences réelles
];

// Ligne 31-37 : Expériences
experiences = [
  {
    title: "Développeuse Front-End",
    company: "Orange",
    period: "Stage de 6 mois",
    description: "Développement d'applications web...",
  },
  // Ajoutez vos autres expériences
];
```

#### Dans `src/component/contact/contact.component.ts` :

```typescript
// Ligne 19 : LinkedIn
{
  name: 'LinkedIn',
  url: '#', // ⚠️ REMPLACEZ PAR VOTRE VRAI LIEN LINKEDIN
  icon: '💼'
},
```

#### Dans `src/component/projects/projects.component.ts` :

```typescript
// Lignes 99-101 : Liens GitHub et Live
githubUrl: '#', // ⚠️ REMPLACEZ PAR VOS VRAIS LIENS
liveUrl: '#'    // ⚠️ REMPLACEZ PAR VOS VRAIS LIENS
```

### ✅ Étape 3 : Ajouter vos images de projets (optionnel)

1. Ajoutez des screenshots dans `src/assets/`
2. Nommez-les : `project-sneakr.png`, `project-smartcity.png`, etc.
3. Mettez à jour `projects.component.ts` :
   ```typescript
   image: "assets/project-sneakr.png";
   ```

---

## 🎨 Personnalisation Avancée

### Changer les Couleurs

Recherchez et remplacez dans tous les fichiers `.css` :

| Actuel    | Remplacer par            | Où           |
| --------- | ------------------------ | ------------ |
| `#667eea` | Votre couleur primaire   | Tous les CSS |
| `#764ba2` | Votre couleur secondaire | Tous les CSS |
| `#222222` | Votre fond               | Tous les CSS |

### Modifier le Footer

Dans `home.component.html` (ligne 91-95), ajoutez vos vrais liens sociaux.

---

## 📱 Tester le Responsive

1. Ouvrez le portfolio dans Chrome
2. Appuyez sur `F12` pour ouvrir DevTools
3. Cliquez sur l'icône mobile (ou `Ctrl+Shift+M`)
4. Testez les tailles :
   - iPhone SE (375px)
   - iPad (768px)
   - Desktop (1920px)

---

## 🚀 Déployer Votre Portfolio

### Option 1 : Vercel (Recommandé)

1. Créez un compte sur [vercel.com](https://vercel.com)
2. Connectez votre repository GitHub
3. Cliquez sur "Deploy"
4. C'est tout ! Vercel gère le SSR automatiquement

### Option 2 : Netlify

1. Créez un compte sur [netlify.com](https://netlify.com)
2. Connectez votre repository
3. Build command : `npm run build`
4. Publish directory : `dist/portfolio/browser`

### Option 3 : GitHub Pages

⚠️ Ne supporte pas le SSR, mais fonctionne pour une version statique

```bash
npm run build
# Déployez le contenu de dist/ sur GitHub Pages
```

---

## ⚠️ Problèmes Courants

### Le serveur ne démarre pas

```powershell
# Supprimez node_modules et réinstallez
Remove-Item -Recurse -Force node_modules
npm install
npm start
```

### Les images ne s'affichent pas

Vérifiez que :

- Les images sont dans `src/assets/`
- Les chemins commencent par `assets/` (sans `/` au début)

### Le formulaire ne fonctionne pas

Normal ! Pour l'instant, il affiche juste un message.
Pour vraiment envoyer des emails, vous devez configurer :

- EmailJS (gratuit)
- SendGrid
- Ou un backend personnalisé

---

## 📚 Documentation

- **README.md** : Installation et commandes
- **GUIDE_AMELIORATIONS.md** : Détails techniques des améliorations
- **RESUME_AMELIORATIONS.md** : Résumé complet des changements

---

## ✅ Checklist Finale

Avant de déployer, vérifiez :

- [ ] Toutes les infos personnelles sont à jour
- [ ] Les liens LinkedIn et GitHub sont corrects
- [ ] Les images s'affichent correctement
- [ ] Le formulaire de contact fonctionne
- [ ] Testé sur mobile, tablette et desktop
- [ ] Aucune erreur dans la console
- [ ] Build de production fonctionne (`npm run build`)

---

## 🎉 C'est Parti !

Lancez votre portfolio maintenant :

```powershell
cd "c:\Users\anael\Documents\PMSC\Portfolio_A.FAURE\Portfolio"
npm start
```

Puis ouvrez : **http://localhost:4200**

---

**Bon courage et félicitations pour votre nouveau portfolio ! 🚀**
