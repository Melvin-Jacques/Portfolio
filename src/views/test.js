import viewHeader from './header';
import viewFooter from './footer';
import viewAnnouncement from './announcement';
import sliceImg from '../assets/sliceImg.png';

export default () => (
  `
  ${viewAnnouncement()}
  ${viewHeader()} 
  
  <div class="relative isolate overflow-hidden bg-gray-800 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <svg class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-800 [mask-image:radial-gradient(64rem_64rem_at_top,black,transparent)]" aria-hidden="true">
        <defs>
          <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y="-1" class="overflow-visible fill-gray-900">
          <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
        </svg>
        <rect width="100%" height="100%" stroke-width="0" fill="#111827" />
      </svg>
    </div>
    <div class="items-center mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
      <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div class="lg:pr-4">
          <div class="lg:max-w-lg">
            <p class="text-base font-semibold leading-7 text-indigo-400">Site Web Marchand</p>
            <div class="flex justify-between">
              <h1 class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Slice</h1>
              <a 
                href="https://github.com/Melvin-Jacques/Slice"
                class="flex items-center text-gray-300"
                alt="View On Github"
                >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="30" 
                  height="30" 
                  viewBox="0 0 432 416"
                >
                  <path fill="currentColor" d="M213.5 0q88.5 0 151 62.5T427 213q0 70-41 125.5T281 416q-14 2-14-11v-58q0-27-15-40q44-5 70.5-27t26.5-77q0-34-22-58q11-26-2-57q-18-5-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 88h-6q-12 31-2 57q-22 24-22 58q0 55 27 77t70 27q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5t-5 3.5t8.5 9q14 7 23 31q1 2 2 4.5t6.5 9.5t13 10.5T130 371t30-2v36q0 13-14 11q-64-22-105-77.5T0 213q0-88 62.5-150.5T213.5 0z"/>
                </svg>
              </a>
            </div>
            <p class="mt-6 text-lg leading-8 text-gray-300">
              Slice est un site marchand développé en une semaine avec PHP et une architecture MVC. Ce projet a été conçu pour présenter une structure fonctionnelle tout en respectant les principes de séparation des préoccupations entre le modèle, la vue et le contrôleur.
            </p>
            <p class="mt-5 text-gray-400">
              <i>Bien que le projet soit inachevé, il illustre une bonne maîtrise des bases du développement web back-end.</i>
            </p>
          </div>
        </div>
      </div>
      <div class="flex justify-center p-0 sm:p-4 lg:pt-10 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
        <img class="w-full max-w-none h-auto rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[90%] md:w-[80%] lg:w-[48rem] object-cover" src="${sliceImg}" alt="Slice Image">
      </div>

      <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div class="lg:pr-4">
          <div class="max-w-xl text-base leading-7 text-gray-300 lg:max-w-lg">
            <ol class="space-y-3 my-5">
              <p class="mb-5 text-xl font-bold text-white">
                Technologies utilisées
              </p>
              <li class="text-body-color dark:text-dark-6 flex text-base">
                  <span
                    class="bg-indigo-500 mr-2.5 flex h-[26px] w-full max-w-[26px] items-center justify-center rounded text-base text-white"
                    >
                  1
                  </span>
                  <div class="text-gray-300">
                    <strong>Utilisation de PHP</strong> : PHP est le langage central du projet, gérant la logique serveur et les interactions avec la base de données. Sa flexibilité permet de développer rapidement des applications web dynamiques et interactives.
                  </div>
              </li>
              <li class="text-body-color dark:text-dark-6 flex text-base">
                  <span
                    class="bg-indigo-500 mr-2.5 flex h-[26px] w-full max-w-[26px] items-center justify-center rounded text-base text-white"
                    >
                  2
                  </span>
                  <div class="text-gray-300">
                    <strong>Architecture MVC</strong> : L’application utilise l’architecture Model-View-Controller (MVC), séparant la logique métier, la présentation des données et le traitement des requêtes, facilitant ainsi la maintenance et l’évolution du projet.
                  </div>
              </li>
              <li class="text-body-color dark:text-dark-6 flex text-base">
                  <span
                    class="bg-indigo-500 mr-2.5 flex h-[26px] w-full max-w-[26px] items-center justify-center rounded text-base text-white"
                    >
                  3
                  </span>
                  <div class="text-gray-300">
                    <strong>Environnement de développement WAMP</strong> : WAMP (Windows, Apache, MySQL, PHP) est un environnement de développement qui permet d’exécuter des applications web sur une machine Windows. Il intègre un serveur Apache, une base de données MySQL et le langage PHP, facilitant le développement et les tests locaux des fonctionnalités du site.
                  </div>
              </li>
              <li class="text-body-color dark:text-dark-6 flex text-base">
                  <span
                    class="bg-indigo-500 mr-2.5 flex h-[26px] w-full max-w-[26px] items-center justify-center rounded text-base text-white"
                    >
                  4
                  </span>
                  <div class="text-gray-300">
                    <strong>Gestion de base de données avec phpMyAdmin</strong> : phpMyAdmin simplifie la gestion de la base de données MySQL, permettant d’effectuer facilement des opérations sur les données.
                  </div>
              </li>
              <li class="text-body-color dark:text-dark-6 flex text-base">
                  <span
                    class="bg-indigo-500 mr-2.5 flex h-[26px] w-full max-w-[26px] items-center justify-center rounded text-base text-white"
                    >
                  5
                  </span>
                  <div class="text-gray-300">
                    <strong>Outils collaboratifs et méthodes agiles</strong> : Figma, SweetAlert2, tableau Kanban, organisation agile. 
                  </div>
              </li>
            </ol>
            <p class="mt-8">Ce site ne pourra être visible que sur <a href="https://github.com/Melvin-Jacques/Slice" class="underline underline-offset-2">Github</a>. Je ne compte pas publier ce projet étant donné son avancement, mais aussi à cause des failles de sécurité qu'il pourrait y avoir, je préfèrerais refaire un site marchand fonctionnel de A à Z pour appliquer mes nouvelles connaisances à celui-ci. Vous pouvez tout de même voir son code sur Github si vous le souhaitez.</p>
            <h2 class="mt-14 text-2xl font-bold tracking-tight text-gray-300">Objectifs</h2>
            <p class="mt-6"> 
              L’objectif principal de Slice était de démontrer la faisabilité d’un site e-commerce fonctionnel dans un délai très court. Ce projet met en avant la capacité à développer une solution technique tout en respectant les délais serrés, tout en posant les bases pour des améliorations futures.
              Il reste un projet fait très tôt dans ma formation, et par conséquent ne montre pas l'étendue de ce que j'ai pu y apprendre.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  ${viewFooter()}
  `
);
