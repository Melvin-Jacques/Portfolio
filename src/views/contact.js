import { init, send } from '@emailjs/browser';
import { copyToClipBoard } from '../utils/copy';
import viewHeader from './header';
import viewFooter from './footer';
import viewAnnouncement from './announcement';

const EMAILJS_USER_ID = 'GbFq4Mc4ALpxXHU1I';
const EMAILJS_SERVICE_ID = 'service_ydi6fk9';
const EMAILJS_TEMPLATE_ID = 'template_2rmfu9u';

// Initialisation d'EmailJS
init({
  publicKey: EMAILJS_USER_ID,
  limitRate: {
    throttle: 10000,
  }
});

let lastRequestTime = 0; // Timestamp de la dernière requête
const requestCooldown = 10000; // 10 secondes en millisecondes

const sendEmail = (event) => {
    event.preventDefault();

    const currentTime = Date.now();

    // Vérifie si 10 secondes se sont écoulées depuis la dernière requête
    if (currentTime - lastRequestTime < requestCooldown) {
        alert('Veuillez attendre 10 secondes entre les envois de message.');
        return; // Ne fait rien si le cooldown n'est pas terminé
    }

    const name = document.getElementById('name').value.replace(/[<>]/g, '');
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Veuillez entrer une adresse e-mail valide.');
        return;
    }
    const phone = document.getElementById('phone').value.replace(/[^0-9\s+-]/g, '');
    const message = document.getElementById('message').value; console.log(message);

    // Envoi de l'e-mail avec EmailJS
    send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        name,
        email,
        phone,
        message,
    })
    .then((response) => {
      console.log('SUCCESS...', response);
      Swal.fire({
        title: response.title,
        icon: 'success',
        timer: 3000,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },
        timerProgressBar: true 
      });
      
      lastRequestTime = Date.now();
      document.getElementById('contactForm').reset();
    }, (error) => {
        console.log('FAILED...', error);
        Swal.fire({
          title: error.title,
          text: "Veuillez réessayer.",
          icon: 'error',
          timer: 3000, // Timer de 3 secondes
          showClass: {
            popup: 'animate__animated animate__shakeX'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          },
          timerProgressBar: true // Ajoute une barre de progression
        });
        ;
    });
};

// Fonction pour initialiser le formulaire et les événements
const initContactForm = () => {
    // Animation + copyToClipBoard
    setTimeout(() => {
        document.getElementById('numberCopy').addEventListener('click', () => {
            copyToClipBoard('myNumber', 'numberCopy');
        });

        document.getElementById('emailCopy').addEventListener('click', () => {
            copyToClipBoard('myEmail', 'emailCopy');
        });
    }, 0);

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', sendEmail);
    }
};

// Assurez-vous que le DOM est chargé avant d'initialiser le formulaire
document.addEventListener('DOMContentLoaded', initContactForm);

// Exporter la fonction par défaut pour générer la vue
export default () => {
    return `
        ${viewAnnouncement()}
        ${viewHeader()}
        <section class="">
            <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div class="lg:col-span-2 lg:py-12">
                        <h1 class="text-white text-3xl font-bold pb-5">Contactez-moi</h1>
                        <p class="max-w-xl text-lg text-white">
                            Si vous voulez me contacter, voici mes informations pour me parler directement par mail je vous invite a cliquer sur mon email, et si vous préférez faire ça rapidement vous pouvez aussi me laissez un message avec le formulaire ci-contre.
                        </p>

                        <div class="flex mt-8 gap-4 items-center">
                            <p class="text-2xl font-bold text-indigo-600" id="myNumber">07 67 49 07 11</p>
                            <svg class="h-6 w-6 text-gray-400 hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" id="numberCopy">
                                <g fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M14 7c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C12.398 4 11.932 4 11 4H8c-1.886 0-2.828 0-3.414.586C4 5.172 4 6.114 4 8v3c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C5.602 14 6.068 14 7 14"/>
                                    <rect width="10" height="10" x="10" y="10" rx="2"/>
                                </g>
                            </svg>
                        </div>

                        <div class="flex mt-8 gap-4 items-center">
                            <a href="mailto:melvin.jacques29@gmail.com" class="text-2xl font-bold text-indigo-600" id="myEmail">melvin.jacques29@gmail.com</a>
                            <svg class="h-6 w-6 text-gray-400 hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" id="emailCopy">
                                <g fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M14 7c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C12.398 4 11.932 4 11 4H8c-1.886 0-2.828 0-3.414.586C4 5.172 4 6.114 4 8v3c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C5.602 14 6.068 14 7 14"/>
                                    <rect width="10" height="10" x="10" y="10" rx="2"/>
                                </g>
                            </svg>
                        </div>
                    </div>

                    <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <form id="contactForm" class="space-y-4">
                            <div>
                                <label class="sr-only" for="name">Nom</label>
                                <input class="w-full rounded-lg p-3 text-sm" placeholder="Nom" type="text" id="name" maxlength="255" required />
                            </div>

                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label class="sr-only" for="email">Email</label>
                                    <input class="w-full rounded-lg p-3 text-sm" placeholder="Adresse Mail" type="email" id="email" required />
                                </div>

                                <div>
                                    <label class="sr-only" for="phone">Téléphone</label>
                                    <input class="w-full rounded-lg p-3 text-sm" placeholder="Numéro de téléphone" type="tel" id="phone" />
                                </div>
                            </div>

                            <div>
                                <label class="sr-only" for="message">Message</label>
                                <textarea class="w-full rounded-lg p-3 text-sm resize-none" placeholder="Message" rows="8" id="message" required></textarea>
                            </div>

                            <div class="mt-4">
                                <button type="submit" class="inline-block w-full rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white sm:w-auto">
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
