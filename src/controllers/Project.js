import viewProject from '../views/project'; // Vue qui affiche les détails d'un projet

const Project = class Project {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.title = document.querySelector('#title-page');
    this.projectName = params.projectName;

    this.run();
  }

  async render() {
    return viewProject(this.projectName);
  }

  async run() {
    console.log(this.projectName); 
    this.title.textContent = 'Melvin J - ' + this.projectName;
    this.el.innerHTML = await this.render();
  }
};

export default Project;
