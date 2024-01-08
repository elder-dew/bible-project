var familyHistoryPopup = document.getElementById('familyHistoryPopup');
var familyHistoryButton = document.getElementById('familyHistory');

var instituteButton = document.getElementById('institute');
var institutePopup = document.getElementById('institutePopup')

var churchButton = document.getElementById('church');
var churchPopup = document.getElementById('churchPopup')

var missionaryButton = document.getElementById('missionary')
var missionaryPopup = document.getElementById('missionaryPopup')

familyHistoryButton.addEventListener('click', () => { OpenPopup(familyHistoryPopup) });
instituteButton.addEventListener('click', () => { OpenPopup(institutePopup) });
churchButton.addEventListener('click', () => { OpenPopup(churchPopup) });
missionaryButton.addEventListener('click', () => { OpenPopup(missionaryPopup) });

function OpenPopup(popup) {
    popup.classList.add('open');
}

function ClosePopup(popup) {
    popup.classList.remove('open');
}