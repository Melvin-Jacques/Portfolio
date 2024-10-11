import viewHeader from './header';
import viewFooter from './footer';
import viewAnnouncement from './announcement';
import BgImg from '../assets/technology1.jpg';

export default () => (
  `
  ${viewAnnouncement()}
  ${viewHeader()}

  <section
    class="relative bg-cover bg-center bg-no-repeat items-center"
    style="height: calc(100vh - 64px); background-image: url(${BgImg})"
  >
    <!-- Gradient uniquement sur cette div -->
    <div class="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-gray-900/20"></div>

    <!-- Contenu principal avec le gradient -->
    <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8">
      <div class="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
        <h1 class="text-3xl font-extrabold text-white sm:text-5xl">
          Hey, I'm
          <strong class="block font-extrabold text-indigo-600"> Melvin Jacques</strong>
        </h1>
        <p class="mt-4 max-w-lg text-white sm:text-xl/relaxed">
          Je suis Melvin Jacques, développeur Full Stack en formation chez Coda avec une passion pour le développement d'applications web performantes. 
        </p>
        <div class="mt-8 flex flex-wrap gap-4 text-center">
          <a
            href="#/projects"
            class="block w-full rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring active:bg-indigo-500 sm:w-auto"
          >
            Mes Projets
          </a>
          <a
            href="#/contact"
            class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-indigo-600 shadow hover:text-indigo-700 focus:outline-none focus:ring active:text-indigo-500 sm:w-auto"
          >
            Contactez-moi
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer en dehors du gradient -->
  <footer class="relative z-10">
    ${viewFooter()}
  </footer>
  `
);
