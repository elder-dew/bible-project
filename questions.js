var questions = ["who was the first prophet", "what is a chede", "who knows anything about Elder Glenn"]
function appearText() {
    var text = document.getElementById("question")
    text.textContent = questions[Math.floor(Math.random() * 2)];
    console.log(Math.floor(Math.random() * 3));
}