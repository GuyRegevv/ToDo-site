
const newMissionBtn = document.getElementById('new-mission-btn');
const newMissonModal = document.getElementById('add-modal');
const backDrop = document.getElementById('backdrop');
const modalCancelBtn = newMissonModal.querySelector('.btn--passive');
const modalAddBtn = modalCancelBtn.nextElementSibling;
const missionDetails = newMissonModal.querySelectorAll('input');
const entryText = document.getElementById('entry-text');


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
       
       const len = missions.length;
       missions.push(newMission);
       console.log(missions);  
       toggleModal();
       rendernewMission(len, description, date, fileLink);
       updateUI();
    }

}

const clearInput = () => {
    for (const input of missionDetails) {
        input.value = '';
    }
    
    return;
}

const updateUI = () => {
    if (missions.length === 0) {
        entryText.style.display = 'block';
    }
    else {
        entryText.style.display = 'none';
    }
}

// const updateIdx = () => {
//     let count = 0;
//     const idxList = document.querySelectorAll('list-item-index');
//     for (let idx in idxList) {
//         idx.innerHTML = count;
//         count++;
//     }
// }

const deleteMission = (id) => {
    missions.splice(id, 1);
    const listRoot = document.getElementById('todo-list');
    listRoot.children[id].remove();
    updateUI();
} //not working properly becuse the index is changing. uniqe id will fix

const rendernewMission = (id, desc, date, file) => {
    const newMission = document.createElement('li');
    newMission.className = 'list-item'
    newMission.innerHTML = `
    <div class="list-item_container list-item_index">${id}</div>
    <div class="list-item_container list-item_description">${desc}</div>
    <div class="list-item_container list-item_endDate">${date}</div>
    <div class="list-item_container list-item_status">
      <div class="status-dot"></div>
    </div>
    <div class="list-item_container list-item_link">
      <a href="${file}"> (-) </a>
    </div>
    <div class="list-item_container list-item_progress">
      <div class="progress-container">
        <div class="progress-bar"></div>
      </div>
    </div>
    <div class="list-item_container list-item_actions">
      <button id="finish-mission-btn">V</button>
      <button id="delete-mission-btn">X</button>
      <button id="options-btn">...</button>
    </div>
    `;

    const deleteMovieBtn = newMission.querySelector('#delete-mission-btn');
    deleteMovieBtn.addEventListener('click', deleteMission.bind(null, id));
    const listRoot = document.getElementById('todo-list');
    listRoot.append(newMission);
}





newMissionBtn.addEventListener('click', toggleModal);
backDrop.addEventListener('click', toggleModal);
modalCancelBtn.addEventListener('click', toggleModal);
modalAddBtn.addEventListener('click', addMissionHandler);
