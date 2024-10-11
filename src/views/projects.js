import viewHeader from './header';
import viewFooter from './footer';
import viewAnnouncement from './announcement';

export default () => (
  `
  ${viewAnnouncement()}
  ${viewHeader()}
  <div class="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mx-auto">
    <div class="max-w-xl pb-5">
      <h2 class="text-3xl font-bold sm:text-4xl text-white">Projets</h2>
      <p class="mt-4 text-gray-300">
        Explorez une sélection de projets, mettant en valeur mes compétences en développement back-end et front-end, avec des solutions techniques adaptées et fonctionnelles.
      </p>
    </div>
    
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 py-8">
      <!-- Première carte -->
      <div class="rounded-lg bg-gray-200">
        <article class="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt="Project Image 1"
            src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
            class="absolute inset-0 h-full w-full object-cover"
          />

          <!-- Effet dégradé -->
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-90"></div>

          <div class="relative pt-32 sm:pt-48 lg:pt-64">
            <div class="p-4 sm:p-6">
              <time datetime="2022-10-10" class="block text-xs text-white/90">10th Oct 2022</time>
              <a href="#">
                <h3 class="mt-0.5 text-lg text-white">Slice - <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700 dark:bg-purple-700 dark:text-purple-100">Live</span></h3>
              </a>
              <p class="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                Un projet de découpage d'images en direct pour une expérience utilisateur fluide.
              </p>
            </div>
          </div>
        </article>
      </div>

      <!-- Deuxième carte -->
      <div class="rounded-lg bg-gray-200">
        <article class="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt="Project Image 2"
            src="https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
            class="absolute inset-0 h-full w-full object-cover"
          />

          <!-- Effet dégradé -->
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-90"></div>

          <div class="relative pt-32 sm:pt-48 lg:pt-64">
            <div class="p-4 sm:p-6">
              <time datetime="2022-11-15" class="block text-xs text-white/90">15th Nov 2022</time>
              <a href="#">
                <h3 class="mt-0.5 text-lg text-white">CodeFlow</h3>
              </a>
              <p class="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                Une application pour les développeurs, optimisée pour faciliter la collaboration sur des projets complexes.
              </p>
            </div>
          </div>
        </article>
      </div>

      <!-- Troisième carte -->
      <div class="rounded-lg bg-gray-200">
        <article class="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt="Project Image 3"
            src="https://images.unsplash.com/photo-1523475496153-3db46b776c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
            class="absolute inset-0 h-full w-full object-cover"
          />

          <!-- Effet dégradé -->
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-90"></div>

          <div class="relative pt-32 sm:pt-48 lg:pt-64">
            <div class="p-4 sm:p-6">
              <time datetime="2022-12-01" class="block text-xs text-white/90">1st Dec 2022</time>
              <a href="#">
                <h3 class="mt-0.5 text-lg text-white">TaskManager</h3>
              </a>
              <p class="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                Une application intuitive de gestion de tâches pour améliorer la productivité.
              </p>
            </div>
          </div>
        </article>
      </div>

      <!-- Quatrième carte -->
      <div class="rounded-lg bg-gray-200">
        <article class="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt="Project Image 4"
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
            class="absolute inset-0 h-full w-full object-cover"
          />

          <!-- Effet dégradé -->
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-90"></div>

          <div class="relative pt-32 sm:pt-48 lg:pt-64">
            <div class="p-4 sm:p-6">
              <time datetime="2023-01-20" class="block text-xs text-white/90">20th Jan 2023</time>
              <a href="#">
                <h3 class="mt-0.5 text-lg text-white">Portfolio</h3>
              </a>
              <p class="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                Un portfolio interactif, affichant mes compétences en design et en développement web.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>

  ${viewFooter()}
  
`
);
