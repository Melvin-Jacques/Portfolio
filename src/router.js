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
    return window.location.hash.slice(1) || '/'; // Par défaut, la route sera "/"
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

    // On parcourt les routes pour voir si l'une correspond à l'URL actuelle
    for (let i = 0; i < this.routes.length; i += 1) {
      const route = this.routes[i];

      if (route.url === this.path) {
        const Controller = route.controller;
        new Controller(this.params); // On instancie le contrôleur avec les paramètres de la requête
        ifExist = true;
        break;
      }
    }

    // Si aucune route ne correspond, on affiche l'erreur 404
    if (!ifExist) {
      new Error404();
    }
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
