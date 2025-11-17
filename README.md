# Application de Gestion des Comptes

Application React pour gérer des comptes bancaires (frontend).

## ⚠️ IMPORTANT : Configuration du Backend

**Vous n'avez PAS besoin de fusionner ce projet avec votre projet backend.** Les deux projets peuvent rester séparés.

### Pour que l'application fonctionne :

1. **Démarrez votre serveur backend** (projet "banque")
   - Le serveur doit tourner sur `http://localhost:8082`
   - Vérifiez que l'endpoint `/api/comptes` est disponible

2. **Configurez CORS sur votre backend** (très important !)
   
   Si votre backend est en Spring Boot, ajoutez cette configuration :
   
   ```java
   @CrossOrigin(origins = "http://localhost:3000")
   ```
   
   Ou dans une classe de configuration :
   ```java
   @Configuration
   public class CorsConfig {
       @Bean
       public WebMvcConfigurer corsConfigurer() {
           return new WebMvcConfigurer() {
               @Override
               public void addCorsMappings(CorsRegistry registry) {
                   registry.addMapping("/api/**")
                           .allowedOrigins("http://localhost:3000")
                           .allowedMethods("GET", "POST", "PUT", "DELETE");
               }
           };
       }
   }
   ```

3. **Vérifiez l'URL dans `src/config.js`**
   - Par défaut : `http://localhost:8082/api`
   - Modifiez si votre backend utilise un autre port ou chemin

### Dépannage

Si les comptes ne s'affichent pas :
- ✅ Vérifiez que le backend est démarré
- ✅ Vérifiez la console du navigateur (F12) pour voir les erreurs
- ✅ Vérifiez que CORS est configuré sur le backend
- ✅ Vérifiez que l'URL dans `config.js` correspond à votre backend

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
