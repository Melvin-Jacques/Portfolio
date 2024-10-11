import viewHeader from './header';
import viewFooter from './footer';
import viewAnnouncement from './announcement';
import BgImg from '../assets/technology1.jpg';

export default () => (
  `
  ${viewHeader()}
  <section class="bg-gray-100">
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
        <div class="lg:col-span-2 lg:py-12">
          <p class="max-w-xl text-lg">
            Si vous voulez m'envoyer un message, merci de renseigner vos infos ici : (en cours de développement)
          </p>

          <div class="mt-8">
            <a href="" class="text-2xl font-bold text-pink-600">07 67 49 07 11</a>
          </div>
        </div>

        <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
          <form action="#" class="space-y-4">
            <div>
              <label class="sr-only" for="name">Nom</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Nom"
                type="text"
                id="name"
              />
            </div>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label class="sr-only" for="email">Email</label>
                <input
                  class="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Adresse Mail"
                  type="email"
                  id="email"
                />
              </div>

              <div>
                <label class="sr-only" for="phone">Téléphone</label>
                <input
                  class="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Numéro de téléphone"
                  type="tel"
                  id="phone"
                />
              </div>
            </div>

            <div>
              <label class="sr-only" for="message">Message</label>

              <textarea
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
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

  <!-- Footer en dehors du gradient -->
  <footer class="relative z-10">
    ${viewFooter()}
  </footer>
  `
);
