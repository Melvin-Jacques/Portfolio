import viewAbout from '../views/about';

const About = class About {
  constructor(params) {
    this.el = document.querySelector('#root');
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
    this.el.innerHTML = await this.render();
  }
};

export default About;
