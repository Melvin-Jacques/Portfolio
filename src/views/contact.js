import { copyToClipBoard } from '../utils/copy'; // Import de la fonction de copie
import viewHeader from './header';
import viewFooter from './footer';
import viewAnnouncement from './announcement';

export default () => {
  //Animation + copyToClipBoard
  setTimeout(() => {
    document.getElementById('numberCopy').addEventListener('click', () => {
      copyToClipBoard('myNumber', 'numberCopy');
    });

    document.getElementById('emailCopy').addEventListener('click', () => {
      copyToClipBoard('myEmail', 'emailCopy');
    });
  }, 0);

  return `
    ${viewAnnouncement()}
    ${viewHeader()}
    <section class="">
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div class="lg:col-span-2 lg:py-12">
            <h1 class="text-white text-3xl font-bold pb-5 ">Contactez-moi</h1>
            <p class="max-w-xl text-lg text-white ">
              Si vous voulez m'envoyer un message, merci de renseigner vos infos ici : (en cours de développement)
            </p>

            <div class="flex mt-8 gap-4 items-center">
              <p class="text-2xl font-bold text-indigo-600" id="myNumber">07 67 49 07 11</p>
              <svg
                class="h-6 w-6 text-gray-400 copy"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                id="numberCopy"
              >
                <g fill="none" stroke="currentColor" stroke-width="2">
                  <path
                    d="M14 7c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C12.398 4 11.932 4 11 4H8c-1.886 0-2.828 0-3.414.586C4 5.172 4 6.114 4 8v3c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C5.602 14 6.068 14 7 14"
                  />
                  <rect width="10" height="10" x="10" y="10" rx="2" />
                </g>
              </svg>
            </div>

            <div class="flex mt-8 gap-4 items-center">
              <p class="text-2xl font-bold text-indigo-600" id="myEmail">melvin.jacques29@gmail.com</p>
              <svg
                class="h-6 w-6 text-gray-400 copy"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                id="emailCopy"
              >
                <g fill="none" stroke="currentColor" stroke-width="2">
                  <path
                    d="M14 7c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C12.398 4 11.932 4 11 4H8c-1.886 0-2.828 0-3.414.586C4 5.172 4 6.114 4 8v3c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C5.602 14 6.068 14 7 14"
                  />
                  <rect width="10" height="10" x="10" y="10" rx="2" />
                </g>
              </svg>
            </div>
          </div>

          <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="#" class="space-y-4">
              <div>
                <label class="sr-only" for="name">Nom</label>
                <input
                  class="w-full rounded-lg border-gray-400 p-3 text-sm"
                  placeholder="Nom"
                  type="text"
                  id="name"
                />
              </div>

              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label class="sr-only" for="email">Email</label>
                  <input
                    class="w-full rounded-lg border-gray-400 p-3 text-sm"
                    placeholder="Adresse Mail"
                    type="email"
                    id="email"
                  />
                </div>

                <div>
                  <label class="sr-only" for="phone">Téléphone</label>
                  <input
                    class="w-full rounded-lg border-gray-400 p-3 text-sm"
                    placeholder="Numéro de téléphone"
                    type="tel"
                    id="phone"
                  />
                </div>
              </div>

              <div>
                <label class="sr-only" for="message">Message</label>
                <textarea
                  class="w-full rounded-lg border-gray-400 p-3 text-sm resize-none"
                  placeholder="Message"
                  rows="8"
                  id="message"
                ></textarea>
              </div>

              <div class="mt-4">
                <button
                  type="submit"
                  class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Envoyer votre message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <footer class="absolute inset-x-0 bottom-0 w-full">
      ${viewFooter()}
    </footer>
  `;
};
