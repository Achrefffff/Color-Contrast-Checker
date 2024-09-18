# 🎯 Color Contrast Checker  

Une extension Chrome qui vérifie automatiquement le contraste des couleurs d'une page web et affiche les résultats selon les normes d'accessibilité WCAG.

## 🚀 Fonctionnalités  

- 🖼️ **Analyse de contraste automatique** : Parcourt le DOM pour analyser les contrastes entre les éléments de texte et leurs arrière-plans.  
- ⚖️ **Conformité WCAG** : Vérifie si les contrastes sont conformes aux règles d'accessibilité (WCAG 2.1).  
- 🔍 **Affichage clair des résultats** : Résultats classés par niveau de conformité avec des bordures colorées (faible, moyen, excellent contraste).  
- 🎨 **Interface utilisateur épurée** : Boutons stylisés et affichage des résultats sous forme de cartes.  

## 📂 Structure du projet
  

color-contrast-checker-extension/  
│
├── manifest.json          # Configuration de l'extension Chrome  
├── popup.html             # Interface utilisateur de l'extension  
├── popup.js               # Logique d'interaction utilisateur  
├── content.js             # Script pour analyser les contrastes sur la page  
├── styles.css             # Feuille de style pour la popup  
└── icons/  
    └── icon.png           # Icône de l'extension  

 ## 📖 Comment utiliser
Télécharger et installer : Clonez ce dépôt ou téléchargez l'archive ZIP.  
Charger l'extension :  
Ouvrez chrome://extensions/ dans Chrome.  
Activez le mode développeur (en haut à droite).  
Cliquez sur Charger l'extension non empaquetée et sélectionnez le dossier du projet.  
Analyser une page :  
Accédez à une page web.  
Cliquez sur l'icône de l'extension dans la barre d'outils.  
Cliquez sur Vérifier le contraste pour afficher les résultats. 

## 🛠️ Technologies utilisées  
HTML : Structure de la popup.  
CSS : Design et mise en forme.  
JavaScript : Logique pour l'analyse du contraste et interaction utilisateur.  
Chrome Extensions API : Pour l'injection de scripts et la gestion des permissions.  
💡 **Améliorations futures :**   
🌟 Mise en évidence visuelle des éléments non conformes sur la page.  
📊 Rapport exportable en JSON ou CSV pour une analyse approfondie.  
⚙️ Personnalisation des paramètres d'analyse (seuils de contraste, types d’éléments ciblés).  
**Créé avec ❤️ pour améliorer l'accessibilité web.**  