import Router from './router';
import Home from './controllers/Home';
import Projects from './controllers/Projects';

import './output.css';

const routes = [{
  url: '/',
  controller: Home
},
{
  url: '/projects',
  controller: Projects
}];

new Router(routes);
