
const newMissionBtn = document.getElementById('new-mission-btn');
const newMissonModal = document.getElementById('add-modal');
const backDrop = document.getElementById('backdrop');
const modalCancelBtn = newMissonModal.querySelector('.btn--passive');
const modalAddBtn = modalCancelBtn.nextElementSibling;
const missionDetails = newMissonModal.querySelectorAll('input');

const missions = [];

function toggleModal () {
    newMissonModal.classList.toggle('visible');
    toggleBackdrop();
    clearInput();
}

function toggleBackdrop () {
    backDrop.classList.toggle('visible');
}

const addMissionHandler = () => {
    const description = missionDetails[0].value;
    const date = missionDetails[1].value;
    const fileLink = missionDetails[2].value;

    if (description.trim() === '' || date.trim() === '') {
        alert('invalid info');
    }
    else {
       const newMission = {
        newDescription: description,
        newDate: date,
        newFileLink: fileLink
       };
       
       missions.push(newMission);
       console.log(missions);  
       toggleModal();
    }

}

const clearInput = () => {
    for (const input of missionDetails) {
        input.value = '';
    }
    
    return;
}



newMissionBtn.addEventListener('click', toggleModal);
backDrop.addEventListener('click', toggleModal);
modalCancelBtn.addEventListener('click', toggleModal);
modalAddBtn.addEventListener('click', addMissionHandler);
