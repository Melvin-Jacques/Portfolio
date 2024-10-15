import viewHeader from './header';
import viewFooter from './footer';
import viewAnnouncement from './announcement';

const projectsData = {
  Slice: {
    title: 'Slice',
    description: `
      Slice est un site marchand développé en une semaine avec PHP et une architecture MVC. Ce projet a été conçu pour présenter une structure fonctionnelle tout en respectant les principes de séparation des préoccupations entre le modèle, la vue et le contrôleur. Bien que le projet soit inachevé, il illustre une solide maîtrise des bases du développement web back-end.
      L’objectif principal de Slice est de démontrer la faisabilité d’un site e-commerce fonctionnel dans un temps très limité, tout en maintenant une structure claire et évolutive, prête à recevoir de futures améliorations.`,
    image: 'https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80',
  },
  ColocApp: {
    title: 'ColocApp',
    description: 'Colocapp est une application de gestion de colocation conçue pour faciliter la vie partagée au quotidien. Ce projet, en cours de développement, utilise une architecture full POO (Programmation Orientée Objet), avec un front-end en JavaScript et un back-end en PHP. Cette approche orientée objet garantit une structure évolutive, modulable et facile à maintenir, adaptée aux besoins des utilisateurs.',
    image: 'https://images.unsplash.com/photo-1523475496153-3db46b776c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
  }
};

export default (projectName) => {
  const project = projectsData[projectName] || {
    title: 'Projet non trouvé',
    description: 'Aucun projet ne correspond à ce nom.',
    image: 'default-image-url', // Placeholder image if project not found
  };

  return `
    ${viewAnnouncement()}
    ${viewHeader()}

    <section>
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div class="max-w-3xl">
          <h2 class="text-3xl font-bold sm:text-4xl">${project.title}</h2>
        </div>

        <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">
            <img
              alt="${project.title}"
              src="${project.image}"
              class="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div class="lg:py-16">
            <article class="space-y-4 text-gray-600">
              <p>${project.description}</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <footer class="absolute inset-x-0 bottom-0 w-full">
      ${viewFooter()}
    </footer>
  `;
};
