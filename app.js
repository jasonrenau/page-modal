// ouvrir modale
const openmod = document.querySelector('.btn-box');
// fermer modale
const closemod = document.querySelector('.btn-close');
// modal
const modal = document.querySelector('.modal-overlay');
// reste de la page
const hero = document.querySelector('.hero');

openmod.addEventListener('click', function () {
  modal.classList.add('open-modal');
});

closemod.addEventListener('click', function () {
  modal.classList.remove('open-modal');
});

window.addEventListener('click', function (e) {
  if (e.target == modal) {
    modal.classList.remove('open-modal');
  }
});
