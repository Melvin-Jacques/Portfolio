import viewAbout from '../views/about';

const About = class About {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.title = document.querySelector('#title-page');
    this.params = params;
    this.data = [];

    this.run();
  }

  async render() {
    return `
    ${viewAbout()}
    `;
  }

  async run() {
    this.title.textContent = 'Melvin J - About';
    this.el.innerHTML = await this.render();
  }
};

export default About;
