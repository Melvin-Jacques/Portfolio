import viewHeader from './header';
import viewFooter from './footer';
import viewAnnouncement from './announcement';
import sliceImg from '../assets/sliceImg.png';

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
      <div class="relative rounded-lg bg-gray-200">
        <a href="#/test" class="absolute top-0 right-0 z-40 mt-2 mr-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="30" 
            height="30" 
            viewBox="0 0 24 24"
            class="text-white"
            >
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 10.5L21 3m-5 0h5v5m0 6v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/>
          </svg>
        </a>
        <a href="#/project/Slice" class="relative block overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt="Project Image 1"
            src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
            class="absolute inset-0 h-full w-full object-cover"
          />

          <div class="relative bg-gradient-to-t from-gray-900/80 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
            <div class="p-4 sm:p-6">
              <time datetime="2022-10-10" class="block text-xs text-white/90 font-bold">10th Oct 2022</time>

              <h3 class="mt-0.5 text-lg text-white font-medium">
                Slice -
              </h3>
              <span class="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-violet-600/65 border-2 border-violet-600 px-2.5 py-0.5 text-xs text-white font-semibold">
                PHP
              </span>
              <span class="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-yellow-500/65 border-2 border-yellow-500 px-2.5 py-0.5 text-xs text-white font-semibold">
                JS
              </span>
              <span class="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-orange-600/65 border-2 border-orange-600 px-2.5 py-0.5 text-xs text-white font-semibold">
                HTML
              </span>
              <span class="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-cyan-600/65 border-2 border-cyan-600 px-2.5 py-0.5 text-xs text-white font-semibold">
                CSS
              </span>
              <p class="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                Ce site e-commerce, réalisé en une semaine avec PHP et une architecture MVC, présente une structure bien organisée. Bien que le projet ne soit pas entièrement terminé, il illustre une bonne maîtrise des principes de développement back-end.
              </p>
            </div>
          </div>
        </a>
      </div>



      <!-- Deuxième carte -->
      <div class="relative rounded-lg bg-gray-200">
        <a href="#/projects" class="absolute top-0 right-0 z-40 mt-2 mr-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="30" 
            height="30" 
            viewBox="0 0 24 24"
            class="text-white"
            >
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 10.5L21 3m-5 0h5v5m0 6v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/>
          </svg>
        </a>
        <a href="#/project/ColocApp" class="relative block overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt="Project Image 1"
            src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
            class="absolute inset-0 h-full w-full object-cover"
          />

          <div class="relative bg-gradient-to-t from-gray-900/80 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
            <div class="p-4 sm:p-6">
              <time datetime="2022-10-10" class="block text-xs text-white/90 font-bold">10th Oct 2022</time>

              <h3 class="mt-0.5 text-lg text-white font-medium">
                Slice -
              </h3>
              <span class="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-violet-600/65 border-2 border-violet-600 px-2.5 py-0.5 text-xs text-white font-semibold">
                PHP
              </span>
              <span class="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-yellow-500/65 border-2 border-yellow-500 px-2.5 py-0.5 text-xs text-white font-semibold">
                JS
              </span>
              <span class="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-orange-600/65 border-2 border-orange-600 px-2.5 py-0.5 text-xs text-white font-semibold">
                HTML
              </span>
              <span class="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-cyan-600/65 border-2 border-cyan-600 px-2.5 py-0.5 text-xs text-white font-semibold">
                CSS
              </span>
              <p class="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                Ce site e-commerce, réalisé en une semaine avec PHP et une architecture MVC, présente une structure bien organisée. Bien que le projet ne soit pas entièrement terminé, il illustre une bonne maîtrise des principes de développement back-end.
              </p>
            </div>
          </div>
        </a>
      </div>

      <!-- Troisième carte -->
      <div class="rounded-lg bg-gray-200">
        <a href="#">
          <article class="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img
              alt="Project Image 1"
              src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
              class="absolute inset-0 h-full w-full object-cover"
            />

            <div class="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
              <div class="p-4 sm:p-6 ">
                <time datetime="2022-10-10" class="block text-xs text-white/90 font-bold">10th Oct 2022</time>

                <h3 class="mt-0.5 text-lg text-white font-medium" id="0">
                  <a href="#/project?projectName=Slice">
                    Slice - 
                  </a>
                  <span class="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-violet-600/65 border-2 border-violet-600 px-2.5 py-0.5 text-xs text-white">
                    PHP
                  </span>
                  <span class="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-orange-600/65 border-2 border-orange-600 px-2.5 py-0.5 text-xs text-white">
                    HTML
                  </span>
                  <span class="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-cyan-600/65 border-2 border-cyan-600 px-2.5 py-0.5 text-xs text-white">
                    CSS
                  </span>
                </h3>

                <p class="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                  Ce site e-commerce, réalisé en une semaine avec PHP et une architecture MVC, présente une structure bien organisée. Bien que le projet ne soit pas entièrement terminé, il illustre une bonne maîtrise des principes de développement back-end.
                </p>
              </div>
            </div>
          </article>
        </a>
      </div>

      <!-- Quatrième carte -->
      <div class="rounded-lg bg-gray-200">
        <a href="#">
          <article class="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img
              alt="Project Image 1"
              src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
              class="absolute inset-0 h-full w-full object-cover"
            />

            <div class="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
              <div class="p-4 sm:p-6 ">
                <time datetime="2022-10-10" class="block text-xs text-white/90 font-bold">10th Oct 2022</time>

                <h3 class="mt-0.5 text-lg text-white font-medium" id="0">
                  <a href="#/project?projectName=Slice">
                    Slice - 
                  </a>
                  <span class="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-violet-600/65 border-2 border-violet-600 px-2.5 py-0.5 text-xs text-white">
                    PHP
                  </span>
                  <span class="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-orange-600/65 border-2 border-orange-600 px-2.5 py-0.5 text-xs text-white">
                    HTML
                  </span>
                  <span class="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-cyan-600/65 border-2 border-cyan-600 px-2.5 py-0.5 text-xs text-white">
                    CSS
                  </span>
                </h3>

                <p class="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                  Ce site e-commerce, réalisé en une semaine avec PHP et une architecture MVC, présente une structure bien organisée. Bien que le projet ne soit pas entièrement terminé, il illustre une bonne maîtrise des principes de développement back-end.
                </p>
              </div>
            </div>
          </article>
        </a>
      </div>
    </div>
  </div>

  ${viewFooter()}
  
`
);
