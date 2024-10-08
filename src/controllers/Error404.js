const Error404 = class {
  constructor() {
    this.el = document.querySelector('#root');

    this.run();
  }

  render() {
    return `
      <div class="min-h-screen flex items-center justify-center">
        <div class="text-center">
          <h1 class="text-9xl font-bold text-gray-800">404</h1>
          <p class="text-2xl md:text-3xl text-gray-600 mt-4">Oops! Page not found.</p>
          <p class="text-gray-500 mt-2">Sorry, the page you're looking for doesn't exist.</p>
          <a href="/" class="mt-6 inline-block px-6 py-3 bg-blue-600 rounded-md text-lg hover:bg-blue-700 transition-colors">
            Go back to Homepage
          </a>
        </div>
      </div>
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Error404;
