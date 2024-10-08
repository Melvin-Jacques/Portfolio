import Router from './router';
import Dashboard from './controllers/Dashboard';

import './output.css';

const routes = [{
  url: '/',
  controller: Dashboard
}];

new Router(routes);
