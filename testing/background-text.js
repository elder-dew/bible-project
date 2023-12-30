var backgroundSquares = document.querySelectorAll('.backgroundSquare')
var colors = ['#a30b37', '#bd6b73', '#bbb6df', '#c6c8ee', '#fcfcff']

for (let i = 0; i < backgroundSquares.length; i++) {
    const square = backgroundSquares[i];
    
    square.style.background = colors[Math.floor(Math.random() * colors.length)];
}