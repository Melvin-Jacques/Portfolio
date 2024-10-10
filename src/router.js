import Error404 from './controllers/Error404';

class Router {
  constructor(routes = []) {
    this.routes = routes;

    this.onHashChange = this.onHashChange.bind(this);

    this.onHashChange();

    window.addEventListener('hashchange', this.onHashChange);
  }

  onHashChange() {
    this.path = window.location.hash.slice(1) || '/';
    this.params = this.getParamsFromHash();

    this.run();
  }

  getParamsFromHash() {
    const hash = window.location.hash.slice(1);
    const [queryString] = hash.split('?');
    const params = {};

    if (queryString) {
      queryString.split('&').forEach((param) => {
        const [key, value] = param.split('=');
        params[key] = decodeURIComponent(value);
      });
    }

    return params;
  }

  startController() {
    let ifExist = false;

    for (let i = 0; i < this.routes.length; i += 1) {
      const route = this.routes[i];

      if (route.url === this.path) {
        const Controller = route.controller;

        new Controller(this.params);
        ifExist = true;

        break;
      }
    }

    if (!ifExist) {
      new Error404();
    }
  }

  run() {
    this.startController();
  }
}

export default Router;
