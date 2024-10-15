import Swal from 'sweetalert2';


export function copyToClipBoard(elementId, svgId) {
  const textToCopy = document.getElementById(elementId).textContent;
  const svgElement = document.getElementById(svgId);

  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      Swal.fire({
        title: 'Copied to clipboard',
        html: 'You can paste it with <strong>Ctrl+V</strong>',
        icon:'success',
        toast: true,
        showConfirmButton: false,
        position: 'top',
        timer: 2000,
        timerProgressBar: true,
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
      })
      
      svgElement.classList.add('shake');
      
      setTimeout(() => {
        svgElement.classList.remove('shake');
      }, 500);
    })
    .catch((err) => {
      console.error('Erreur lors de la copie: ', err);
    });
}
