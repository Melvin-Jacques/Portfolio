import viewHome from '../views/home';

const Home = class Home {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.title = document.querySelector('#title-page');
    this.params = params;
    this.data = [];

    this.run();
  }

  async render() {
    return `
    ${viewHome()}
    `;
  }

  async run() {
    this.title.textContent = 'Melvin J - Portfolio';
    this.el.innerHTML = await this.render();
  }
};

export default Home;
