var startScreen = document.getElementById('startScreen')
var mainContent = document.getElementById('main-game')

function ClearScreen() {
    startScreen.style.opacity = 0
    startScreen.style.zIndex = -999
    mainContent.classList.remove('frozen')
    StartTimer()
}