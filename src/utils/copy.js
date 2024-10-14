import viewAlert from '../views/alert';
import Swal from 'sweetalert2';


export function copyToClipBoard(elementId, svgId) {
  const textToCopy = document.getElementById(elementId).textContent;
  const svgElement = document.getElementById(svgId);

  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      Swal.fire({
        title: 'Successfully copied to clipboard',
        text: 'Now you can paste it with Ctrl+V',
        position: 'top',
        showClass: {
          popup: `
          animate__animated
          animate__fadeInDown
          animate__faster
        `,
        },
        hideClass: {
          popup: `
          animate__animated
          animate__fadeOutUp
          animate__faster
        `,
        },
        grow: 'row',
        showConfirmButton: false,
        showCloseButton: true,
      })
      
      // Ajouter la classe d'animation
      svgElement.classList.add('shake');
      
      // Retirer l'animation après qu'elle soit terminée (0.5s)
      setTimeout(() => {
        svgElement.classList.remove('shake');
      }, 500);
    })
    .catch((err) => {
      console.error('Erreur lors de la copie: ', err);
    });
}
