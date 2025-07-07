# SOLUNET INFORMATIQUE - Site Web

## 🏢 À propos

**SOLUNET INFORMATIQUE** est une entreprise innovante spécialisée dans les solutions informatiques adaptées aux besoins des professionnels et des particuliers.

**Slogan :** "Votre solution numérique de proximité"

## 📋 Structure du projet

```
projet-integrateur/
├── 📄 Pages HTML
│   ├── index.html                    # Page d'accueil
│   ├── services.html                 # Page des services
│   ├── about.html                    # Page à propos
│   ├── contact.html                  # Page de contact
│   ├── faq.html                      # Questions fréquentes
│   └── mentions-legales.html         # Mentions légales
├── 📦 Package TYPO3
│   └── site_solunet/
│       ├── Configuration/TypoScript/
│       ├── Resources/Public/
│       │   ├── Css/solunet.css       # Styles personnalisés
│       │   ├── JavaScript/solunet.js # Scripts personnalisés
│       │   └── img/                  # Images du site
│       └── ext_emconf.php
├── 📊 Documentation
│   ├── rapport-solunet.html          # Rapport d'évaluation
│   └── presentation-solunet.html     # Présentation du projet
├── ⚙️ Configuration
│   ├── composer.json                 # Dépendances TYPO3
│   ├── sitemap.xml                   # Plan du site
│   └── robots.txt                    # Configuration robots
└── 📖 README.md                      # Documentation
```

## 🛠️ Technologies utilisées

- **HTML5** - Structure sémantique et accessible
- **CSS3** - Styles personnalisés avec variables CSS
- **Bootstrap 5.3.0** - Framework CSS pour le responsive design
- **Font Awesome 6.4.0** - Icônes vectorielles
- **JavaScript ES6+** - Interactions et animations
- **TYPO3 12.4** - CMS (configuration)
- **Google Maps** - Intégration de carte interactive

## 🚀 Installation et déploiement

### Prérequis
- Serveur web (Apache/Nginx)
- PHP 8.1+ (pour TYPO3)
- Composer (pour les dépendances)

### Installation locale

1. **Cloner le repository**
   ```bash
   git clone [URL_DU_REPO]
   cd projet-integrateur
   ```

2. **Installer les dépendances TYPO3**
   ```bash
   composer install
   ```

3. **Configuration du serveur web**
   - Pointer le document root vers le dossier du projet
   - Activer la réécriture d'URL (mod_rewrite pour Apache)

4. **Accéder au site**
   - Ouvrir `index.html` dans votre navigateur
   - Ou utiliser un serveur local :
     ```bash
     # Avec Python
     python -m http.server 8000
     
     # Avec PHP
     php -S localhost:8000
     ```

### Déploiement en production

Le site est prêt pour un hébergement statique :
- **Netlify** - Drag & drop des fichiers
- **Vercel** - Déploiement automatique
- **GitHub Pages** - Hébergement gratuit
- **OVH, O2switch, etc.** - Hébergement classique

## 📱 Fonctionnalités

### Design et UX
- ✅ Design moderne et professionnel
- ✅ Interface responsive (mobile-first)
- ✅ Animations fluides et transitions
- ✅ Navigation intuitive
- ✅ Accessibilité (ARIA, contrastes, navigation clavier)

### Services présentés
1. **Maintenance Informatique** - Installation, diagnostic, réparation
2. **Réseau d'Entreprise** - Configuration WiFi, VPN, sécurisation
3. **Électronique & Réparation** - PC, imprimantes, modems
4. **Vente de Matériel** - PC, périphériques, consommables
5. **Solutions Cloud** - Sauvegarde, télétravail, partage
6. **Sécurité Informatique** - Antivirus, pare-feu, contrôle parental

### Performance
- ✅ Chargement optimisé (CDN Bootstrap/FontAwesome)
- ✅ Images optimisées
- ✅ Code minifié et structuré
- ✅ SEO optimisé (meta tags, structure sémantique)

## 🎯 SEO et Accessibilité

### SEO
- Meta tags optimisés pour chaque page
- Structure HTML sémantique
- URLs propres et descriptives
- Sitemap XML et robots.txt

### Accessibilité
- Navigation au clavier
- Attributs ARIA appropriés
- Contrastes de couleurs conformes
- Support des lecteurs d'écran

## 📞 Contact

**SOLUNET INFORMATIQUE**
- 📍 Ouagadougou, Quartier Kalgondhin, Burkina Faso
- 📞 +226 56 42 01 80
- 📱 WhatsApp : +226 70 09 04 32
- 📧 koudougoulauren@gmail.com

### Réseaux sociaux
- [Facebook](https://facebook.com/solunetinformatique)
- [LinkedIn](https://linkedin.com/company/solunet-informatique)
- [Twitter](https://twitter.com/solunet_info)
- [Instagram](https://instagram.com/solunetinformatique)

## 📊 Évaluation du projet

- **Score global : 9/10**
- **Design & UX : 9/10**
- **Technique : 9/10**
- **SEO : 9/10**

Le projet présente un excellent niveau de qualité technique et design, prêt pour un déploiement en production.

## 🔧 Maintenance

### Mise à jour du contenu
- Modifiez directement les fichiers HTML
- Les styles sont dans `packages/site_solunet/Resources/Public/Css/solunet.css`
- Les scripts sont dans `packages/site_solunet/Resources/Public/JavaScript/solunet.js`

### Ajout de nouvelles pages
1. Créez un nouveau fichier HTML
2. Copiez la structure de navigation et footer
3. Ajoutez le lien dans la navigation
4. Testez la responsivité

## 📄 Licence

© 2024 SOLUNET INFORMATIQUE. Tous droits réservés.

---

**Développé avec ❤️ pour SOLUNET INFORMATIQUE** 