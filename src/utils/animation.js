// Fonction pour appliquer l'animation d'activation
export function applyActiveAnimation(target) {
  // Ajoute la classe d'animation à l'élément ciblé
  target.classList.add("active-animation");

  // Enlève l'animation après un délai (par exemple 300ms)
  setTimeout(() => {
    target.classList.remove("active-animation");
  }, 300); // Durée de l'animation (300ms ici, ajustable selon besoin)
}
