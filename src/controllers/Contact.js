import viewContact from '../views/contact';

const Contact = class Contact {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.data = [];

    this.run();
  }

  async render() {
    return `
    ${viewContact()}
    `;
  }

  async run() {
    this.el.innerHTML = await this.render();
  }
};

export default Contact;
