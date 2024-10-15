const Error404 = class {
  constructor() {
    this.el = document.querySelector('#root');
    this.title = document.querySelector('#title-page');

    this.run();
  }

  render() {
    return `
    <div class="flex justify-center items-center h-screen bg-gray-100">
      <div class="absolute bottom-1/2">
        <div class="text-center">
          <h1 class="text-9xl font-black text-gray-300">404</h1>

          <p class="text-2xl font-bold tracking-tight text-gray-300 sm:text-4xl">Uh-oh!</p>

          <p class="mt-4 text-gray-400">We can't find that page.</p>

          <a
            href="#"
            class="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
          >
            Go Back Home
          </a>
        </div>
      </div>
    </div>
    `;
  }

  run() {
    this.title.textContent = 'Error 404 - Page Not Found';
    this.el.innerHTML = this.render();
  }
};

export default Error404;
