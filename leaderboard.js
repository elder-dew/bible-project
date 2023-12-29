var playerList = document.querySelector("#playerList");
var playerName = document.getElementById("nameDropdown");
var playerPlace = document.getElementById("placeDropdown");
var playerScore = sessionStorage.getItem('score');

function populatePlayerList() {
    sessionStorage.removeItem('score');
    playerList.innerHTML += `<div>${playerName.value} of ${playerPlace.value}: ${playerScore}</div>`;
}