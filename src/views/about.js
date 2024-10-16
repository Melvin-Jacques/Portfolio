import viewHeader from './header';
import viewFooter from './footer';
import viewAnnouncement from './announcement';

export default () => (
  `
  ${viewHeader()}
  <section class="bg-gray-900 text-white">
    <div class="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div class="max-w-xl">
        <h2 class="text-3xl font-bold sm:text-4xl">Profil</h2>

        <p class="mt-4 text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolores iure fugit totam
          iste obcaecati. Consequatur ipsa quod ipsum sequi culpa delectus, cumque id tenetur
          quibusdam, quos fuga minima.
        </p>
      </div>

      <div class="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
        <div class="flex items-start gap-4">
          <span class="shrink-0 rounded-lg bg-gray-800 p-4">
            <svg
              class="size-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <div>
            <h2 class="text-lg font-bold">HTML/CSS</h2>

            <p class="mt-1 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
              possimus quisquam reiciendis tempora animi! Quaerat, saepe?
            </p>
          </div>
        </div>

        <div class="flex items-start gap-4">
          <span class="shrink-0 rounded-lg bg-gray-800 p-4">
            <svg
              class="size-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <div>
            <h2 class="text-lg font-bold">JavaScript</h2>

            <p class="mt-1 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
              possimus quisquam reiciendis tempora animi! Quaerat, saepe?
            </p>
          </div>
        </div>

        <div class="flex items-start gap-4">
          <span class="shrink-0 rounded-lg bg-gray-800 p-4">
            <svg
              class="size-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <div>
            <h2 class="text-lg font-bold">PHP</h2>

            <p class="mt-1 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
              possimus quisquam reiciendis tempora animi! Quaerat, saepe?
            </p>
          </div>
        </div>

        <div class="flex items-start gap-4">
          <span class="shrink-0 rounded-lg bg-gray-800 p-4">
            <svg
              class="size-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <div>
            <h2 class="text-lg font-bold">Python</h2>

            <p class="mt-1 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
              possimus quisquam reiciendis tempora animi! Quaerat, saepe?
            </p>
          </div>
        </div>

        <div class="flex items-start gap-4">
          <span class="shrink-0 rounded-lg bg-gray-800 p-4">
            <svg
              class="size-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <div>
            <h2 class="text-lg font-bold">Git</h2>

            <p class="mt-1 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
              possimus quisquam reiciendis tempora animi! Quaerat, saepe?
            </p>
          </div>
        </div>

        <div class="flex items-start gap-4">
          <span class="shrink-0 rounded-lg bg-gray-800 p-4">
            <svg
              class="size-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <div>
            <h2 class="text-lg font-bold">Méthode Agile</h2>

            <p class="mt-1 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
              possimus quisquam reiciendis tempora animi! Quaerat, saepe?
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <span class="flex items-center">
    <span class="h-px flex-1 bg-black"></span>
    <span class="shrink-0 px-6">Mon parcours</span>
    <span class="h-px flex-1 bg-black"></span>
  </span>

  <!-- Footer en dehors du gradient -->
  <footer class="relative z-10">
    ${viewFooter()}
  </footer>
  `
);
