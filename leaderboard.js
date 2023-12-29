var playerList = document.querySelector("#playerList");
var playerName = document.getElementById("nameDropdown");
var playerPlace = document.getElementById("placeDropdown")

function populatePlayerList() {
    playerList.innerHTML += `<div>${playerName.value} of ${playerPlace.value}: ${score}</div>`;
    
}