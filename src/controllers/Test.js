import viewTest from '../views/test'; // Vue qui affiche les détails d'un projet

const Test = class Test {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.title = document.querySelector('#title-page');

    this.run();
  }

  async render() {
    return viewTest();
  }

  async run() { 
    this.title.textContent = 'Melvin J - ' + this.TestName;
    this.el.innerHTML = await this.render();
  }
};

export default Test;
