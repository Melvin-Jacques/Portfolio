import viewProjects from '../views/projects';

const Projects = class Projects {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.title = document.querySelector('#title-page');
    this.params = params;
    this.data = [];

    this.run();
  }

  async render() {
    return `
    ${viewProjects()}
    `;
  }

  async run() {
    this.title.textContent = 'Melvin J - Projects';
    this.el.innerHTML = await this.render();
  }
};

export default Projects;
