var playerList = document.querySelector("#playerList");
var textBox = document.getElementById("username")



function populatePlayerList() {
    playerList.innerHTML += `<div>${textBox.value}: ${score}</div>`;
    
    textBox.value = null;
}