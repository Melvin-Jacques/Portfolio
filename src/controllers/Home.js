import viewHome from '../views/home';

const Home = class Home {
  constructor(params) {
    this.el = document.querySelector('#root');
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
    this.el.innerHTML = await this.render();
  }
};

export default Home;
