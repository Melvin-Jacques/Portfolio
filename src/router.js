import Error404 from './controllers/Error404';

const Router = class Router {
  constructor(routes = []) {
    this.routes = routes;

    // On écoute l'événement "hashchange" pour détecter les changements d'URL via le hash
    window.addEventListener('hashchange', this.onHashChange.bind(this));

    this.path = this.getHashPath();

    this.params = this.getParams();

    this.run();
  }

  // Méthode pour récupérer la route à partir du hash
  getHashPath() {
    const hash = window.location.hash.slice(1) || '/'; // Supprime le "#"
    
    // Vérifie s'il s'agit d'une URL dynamique (ex: /project/Slice)
    const segments = hash.split('/');
    if (segments.length > 2) {
      return { path: `/${segments[1]}`, param: segments[2] }; // Retourne la route avec le paramètre
    }
  
    return { path: hash, param: null }; // Sinon retourne simplement la route
  }

  // Méthode pour récupérer les paramètres de la requête (si présents après le "?")
  getParams() {
    const query = window.location.hash.split('?')[1]; // On prend ce qui suit le "?"
    return !query
      ? {}
      : Object.fromEntries(
        query.split('&').map((param) => param.split('='))
      );
  }

  // Méthode pour démarrer le bon contrôleur basé sur la route actuelle
  startController() {
    let ifExist = false;
    const { path, param } = this.getHashPath(); // Récupère la route et le paramètre
  
    // Parcourt les routes pour voir si l'une correspond à l'URL actuelle
    for (let i = 0; i < this.routes.length; i += 1) {
      const route = this.routes[i];
  
      if (route.url === path) {
        const Controller = route.controller;
        
        // Passe le paramètre au contrôleur (si présent)
        new Controller({ projectName: param }); 
        ifExist = true;
        break;
      }
    }
  
    // Si aucune route ne correspond, affiche l'erreur 404
    if (!ifExist) {
      new Error404();
    }
  }
  
  // Nouvelle méthode pour extraire les paramètres
  getParamsFromRoute(routeUrl, match) {
    const routeParts = routeUrl.split('/');
    const params = {};
  
    routeParts.forEach((part, index) => {
      if (part.startsWith(':')) {
        params[part.slice(1)] = match[index]; // Associe le paramètre au match
      }
    });
  
    return params;
  }
  

  // Méthode principale pour lancer le routage
  run() {
    this.startController();
  }

  onHashChange() {
    this.path = this.getHashPath(); // On récupère la nouvelle route
    this.params = this.getParams(); // On récupère les nouveaux paramètres
    this.run(); // On lance le routage
  }
};

export default Router;
