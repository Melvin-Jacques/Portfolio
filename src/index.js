import Router from './router';
import Home from './controllers/Home';
import Projects from './controllers/Projects';
import Contact from './controllers/Contact';
import About from './controllers/About';

import './output.css';

const routes = [{
  url: '/',
  controller: Home
},
{
  url: '/projects',
  controller: Projects
},
{
  url: '/contact',
  controller: Contact
},
{
  url: '/about',
  controller: About
}
];

new Router(routes);
