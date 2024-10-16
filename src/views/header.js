import logo from '../assets/logo (2).png';

export default () => {

  const currentHash = window.location.hash;
  const isActive = (hash) => {
    // Activer le bouton "Projects" si "projects" se trouve quelque part dans l'URL
    if (hash === '#/projects') {
      return currentHash.includes('project') ? 'bg-indigo-700 border-b border-b-2 border-indigo-700 text-white' : 'text-gray-300 hover:bg-indigo-400 hover:text-white';
    }
    // Vérifier les autres liens par correspondance exacte
    return currentHash === hash ? 'bg-indigo-700 border-b border-b-2 border-indigo-700 text-white' : 'text-gray-300 hover:bg-indigo-400 hover:text-white';
  };
  
  const activeButton = document.querySelector('.active');
  if (activeButton) {
    applyActiveAnimation(activeButton);
  }

  return `
  <nav class="bg-gray-800 z-40">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span class="absolute -inset-0.5"></span>
              <span class="sr-only">Open main menu</span>
              <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
          </button>
        </div>
        <div class="flex flex-1 items-center justify-between sm:items-stretch sm:justify-between">
          <div class="flex flex-shrink-0 items-center">
            <a href="#/" class="flex flex-shrink-0 items-center">
              <img class="h-8 w-auto" src="${logo}" alt="Your Company">
            </a>
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <a href="#/" class="rounded px-3 py-2 text-sm font-medium ${isActive('#/')}" aria-current="page">Home</a>
              <a href="#/projects" class="rounded px-3 py-2 text-sm font-medium ${isActive('#/projects')}">Projects</a>
              <a href="#/contact" class="rounded px-3 py-2 text-sm font-medium ${isActive('#/contact')}">Contact</a>
              <a href="#/about" class="rounded px-3 py-2 text-sm font-medium ${isActive('#/about')}">About</a>
              <a href="#/test" class="rounded px-3 py-2 text-sm font-medium ${isActive('#/test')}">Test</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" id="mobile-menu">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a href="#/" class="block rounded-md px-3 py-2 text-base font-medium ${isActive('#/')}" aria-current="page">Home</a>
        <a href="#/projects" class="block rounded-md px-3 py-2 text-base font-medium ${isActive('#/projects')}">Projects</a>
        <a href="#/contact" class="block rounded-md px-3 py-2 text-base font-medium ${isActive('#/contact')}">Contact</a>
        <a href="#/about" class="block rounded-md px-3 py-2 text-base font-medium ${isActive('#/about')}">About</a>
      </div>
    </div>
  </nav>
  `;
};
