var buttons = document.getElementsByClassName("answer-button");
var questionP = document.getElementById("question");
var currentQuestionIndex;
var freeze;
var score = 0;
var scoreP = document.getElementById("scoreP");
const pages = document.querySelectorAll(".page")
var startTime = Date.now();
var timerObj = document.getElementById('timer')
var gameTime = 25;
var timePenalty = 2;

window.onload = nextQuestion;

function nextQuestion() {
  questionNum = Math.floor(Math.random() * (bibleTriviaQuestions.length - 1));
  while (questionNum == currentQuestionIndex) { questionNum = Math.floor(Math.random() * (bibleTriviaQuestions.length - 1)); }
  console.log(questionNum)
  currentQuestionIndex = questionNum;
  var answerArray = bibleTriviaQuestions[questionNum].options;
  answerArray.sort(() => Math.random() - 0.5);
  console.log(answerArray)
  freeze = false;
  questionP.innerText = bibleTriviaQuestions[questionNum].question;

  for (let i = 0; i < answerArray.length; i++) {
    const answerOption = answerArray[i];
    buttons[i].innerHTML = `<span>${answerOption}</span>`;
    buttons[i].classList = "answer-button";
  }
}

function checkAnswer(answerButton) {
  if (freeze == true) return;
  if (answerButton.innerText == bibleTriviaQuestions[currentQuestionIndex].answer) {
    answerButton.classList.add('correct');
    score += 1;
    setScore();
    startTime += 1000;
    freeze = true;
    setTimeout(nextQuestion, 500);
  }
  else {
    if(answerButton.classList.contains('incorrect')) return;
    answerButton.classList.add('incorrect');
    score -= 1;
    setScore();
    startTime -= 2000;
  }
}

function setScore() {
  scoreP.textContent = `Your score is ${score}`;
}

/*function switchPage(direction) {
  if (direction === 'down') {
    pages.forEach(
      pages => (pages.style.transform = `translateY(-5%)`)
    )
  }
  else if (direction === 'up') {
    pages.forEach(
      pages => (pages.style.transform = `translateY(5%)`)
    )
  }
  else {
    console.log("I'm confused")
  }
}*/

setInterval(() => {
  var timeLeft = (gameTime - Math.floor((Date.now() - startTime) / 1000));
  if (timeLeft <= 0) {
    sessionStorage.setItem('score', score);
    window.location.href = './leaderboard.html'
  }
  timerObj.innerHTML = `Time: ${timeLeft}`;
}, 100);