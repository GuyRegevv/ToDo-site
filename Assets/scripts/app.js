
const newMissionBtn = document.getElementById('new-mission-btn');
const newMissonModal = document.getElementById('add-modal');
const backDrop = document.getElementById('backdrop');
const modalCancelBtn = newMissonModal.querySelector('.btn--passive');

function toggleModal () {
    newMissonModal.classList.toggle('visible');
    toggleBackdrop();
}

function toggleBackdrop () {
    backDrop.classList.toggle('visible');
}



newMissionBtn.addEventListener('click', toggleModal);
backDrop.addEventListener('click', toggleModal);
modalCancelBtn.addEventListener('click', toggleModal);