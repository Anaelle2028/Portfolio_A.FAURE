# 🎨 Portfolio - Anaëlle Faure

Portfolio professionnel développé avec Angular 19 et Server-Side Rendering (SSR).

## 📋 À propos

Ce portfolio présente mes compétences, projets et expériences en développement web front-end. Il a été conçu pour offrir une expérience utilisateur moderne, fluide et responsive.

## ✨ Fonctionnalités

- 🎯 **Navigation fluide** avec Angular Router
- 🎨 **Design moderne** avec animations et transitions CSS
- 📱 **Totalement responsive** - Compatible mobile, tablette et desktop
- 🚀 **Server-Side Rendering** pour de meilleures performances et SEO
- 📝 **Formulaire de contact** avec validation reactive forms
- 🎭 **Modal interactif** pour les détails des projets
- ♿ **Accessible** - Respect des bonnes pratiques d'accessibilité

## 🛠️ Technologies utilisées

- **Framework** : Angular 19.2.0
- **Langage** : TypeScript 5.7.2
- **SSR** : Angular Universal (@angular/ssr)
- **Routing** : Angular Router
- **Forms** : Reactive Forms
- **Styling** : CSS3 avec variables et animations
- **Build** : Angular CLI

## 📦 Installation

### Prérequis

- Node.js (v18+)
- npm ou yarn

### Étapes

```bash
# Cloner le repository
git clone https://github.com/Anaelle2028/Portfolio_A.FAURE.git

# Se déplacer dans le dossier
cd Portfolio_A.FAURE/Portfolio

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm start
```

Le site sera accessible sur `http://localhost:4200/`

## 🚀 Scripts disponibles

```bash
# Développement
npm start                    # Lance le serveur de développement

# Production
npm run build               # Build de production
npm run serve:ssr:Portfolio # Lance le serveur SSR en production

# Tests
npm test                    # Lance les tests unitaires

# Autres
npm run watch              # Build en mode watch
```

## 📁 Structure du projet

```
Portfolio/
├── src/
│   ├── app/
│   │   ├── app.component.*          # Composant racine
│   │   ├── app.config.*             # Configuration de l'app
│   │   └── app.routes.ts            # Routes de l'application
│   ├── component/
│   │   ├── header/                  # Navigation
│   │   ├── home/                    # Page d'accueil
│   │   ├── about/                   # Page à propos
│   │   ├── projects/                # Page projets
│   │   └── contact/                 # Page contact
│   ├── assets/                      # Images et ressources
│   ├── styles.css                   # Styles globaux
│   └── index.html                   # Point d'entrée HTML
├── public/                          # Fichiers publics (favicon, etc.)
└── angular.json                     # Configuration Angular
```

## 🎨 Pages

- **🏠 Accueil** : Présentation, compétences et projets mis en avant
- **👤 À propos** : Parcours, expériences et compétences détaillées
- **💼 Projets** : Portfolio de projets avec détails techniques
- **📧 Contact** : Formulaire de contact avec validation

## 🌐 Déploiement

Le projet utilise le Server-Side Rendering (SSR) pour des performances optimales.

```bash
# Build de production avec SSR
npm run build

# Lancer le serveur SSR
npm run serve:ssr:Portfolio
```

## 📱 Responsive Design

Le portfolio est optimisé pour tous les appareils :

- 📱 Mobile : < 480px
- 📱 Tablette : 480px - 768px
- 💻 Desktop : > 768px

## 🎨 Palette de couleurs

- **Primary** : `#667eea` (Bleu violet)
- **Secondary** : `#764ba2` (Violet)
- **Background** : `#222222` (Gris foncé)
- **Text** : `#ffffff` / `#d0d0d0`

## 📄 Licence

Ce projet est sous licence privée - Tous droits réservés © 2025 Anaëlle Faure

## 👤 Contact

- **Email** : [anaelle.faure@epitech.eu](mailto:anaelle.faure@epitech.eu)
- **GitHub** : [@Anaelle2028](https://github.com/Anaelle2028)

---

Développé avec ❤️ par Anaëlle Faure
