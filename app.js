// ouvrir modale
const openmod = document.querySelector('.btn-box');
// fermer modale
const closemod = document.querySelector('.btn-close');
// modal
const modal = document.querySelector('.modal-overlay');

openmod.addEventListener('click', function () {
  modal.classList.add('open-modal');
});
closemod.addEventListener('click', function () {
  modal.classList.remove('open-modal');
});
