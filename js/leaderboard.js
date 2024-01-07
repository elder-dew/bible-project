/*var playerList = document.querySelector("#playerList");
var playerName = document.getElementById("nameDropdown");
var playerPlace = document.getElementById("placeDropdown");
var playerScore = sessionStorage.getItem('score');
var submitButton = document.getElementById('submitButton');
var leaderBoardCont = document.getElementById('leaderboardControlsCont');
var newPlayerDb = playerDb;
console.log(playerDb)

playerDb.items.sort(function (a, b) { return b.score - a.score })


playerDb.items.forEach(element => {
    playerList.innerHTML += `<div class='player'>${element.name}: ${element.score}</div>`
});

function populatePlayerList() {
    playerDb.items.push(
        {
            'name': `${playerName.value} of ${playerPlace.value}`,
            'score': `${playerScore}`
        });
    playerDb.items.sort(function (a, b) { return b.score - a.score })

    playerList.innerHTML = "";
    playerDb.items.forEach(element => {

        // Check to see if it's the new player
        if (element.name == `${playerName.value} of ${playerPlace.value}`) {
            playerList.innerHTML += `<div class='player' id='newPlayer'>${element.name}: ${element.score}</div>`;
            return
        }

        playerList.innerHTML += `<div class='player'>${element.name}: ${element.score}</div>`
    });
    // Scroll to new player
    window.location.href = "#newPlayer"
    playerList.innerHTML += `<div class='player' id='newPlayer'>${playerName.value} of ${playerPlace.value}: ${playerScore}</div>`;
    window.location.href = '#newPlayer';
    leaderBoardCont.remove();
    sessionStorage.removeItem('score');
}*/
var leaderboardControls = document.getElementById('leaderboardControlsCont')

console.log(sessionStorage.getItem('score'))
window.onload = () => { if (sessionStorage.getItem('score') == null) leaderboardControls.remove() }