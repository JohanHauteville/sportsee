![alt text](./src/assets/logo.png)

# Projet React : SportSee - Tableau de bord analytics

## Description

Ce projet est le douzième de la formation de développeur d'application React de chez OpenCLassrooms.

Dans ce projet on nous demande de lancer la création de la page de profil en partant de maquettes disponibles à cet adresse :
https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?node-id=0%3A1

En utilisant le Kanban avec les User Stories:
https://www.notion.so/openclassrooms/Copy-of-Dev4U-projet-Learn-Home-6686aa4b5f44417881a4884c9af5669e

Le BackEnd est disponible ici:
https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard

## Outils et Contraintes techniques

### Outils standards

- Create React App
- React Routeur
- Styling : au choix CSS ou SASS
- Utilisation de la librairie Recharts.js pour les graphiques

### Contraintes techniques

#### React:

- Découpage en composants modulaires et réutilisables
- Un composant par fichier
- Structure logique des différents fichiers
- Utilisation des props entre les composants
- Utilisation du state dans les composants quand c'est nécessaire
- Gestion des événements
- Gérer les Call Api en dehors des components
- Standardiser les données venants de l'API

Il est également recommandé, mais pas imposé, d'utiliser des composants fonctionnels plutôt que des composants classes.

#### React Router:

- Les paramètres des routes sont gérés par React Router 
- Il existe une page par route
- La page 404 est renvoyée pour chaque route inexistante, ou si une valeur présente dans l'URL ne fait pas partie des données renseignées.
- La logique du routeur est réunie dans une seul fichier

## Scripts disponibles

Dans ce projet, vous pouvez lancer:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
