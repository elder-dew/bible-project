var buttons = document.getElementsByClassName("answer-button");
var questionP = document.getElementById("question");
var currentQuestionIndex;
var freeze;
var score = 0;
var scoreP = document.getElementById("scoreP");
const pages = document.querySelectorAll(".page")
var timerObj = document.getElementById('timer')
var gameTime = 60;
var timePenalty = 2;
var usedQuestions = [];

window.onload = nextQuestion();

/*var newTimeInd = document.createElement('p',)
var newTimeIndWords = document.createTextNode('+1s')
newTimeInd.appendChild(newTimeIndWords)
newTimeInd.classList.add('timerInd')
timerObj.parentNode.insertBefore(newTimeInd, timerObj)*/

function nextQuestion() {
  timerObj.classList = "null"

  questionNum = Math.floor(Math.random() * (bibleTriviaQuestions.length - 1));
  while (questionNum == currentQuestionIndex || CheckQuestionUsed(questionNum)) { questionNum = Math.floor(Math.random() * (bibleTriviaQuestions.length - 1)); }

  usedQuestions.push(questionNum)
  currentQuestionIndex = questionNum;
  var answerArray = bibleTriviaQuestions[questionNum].options;
  answerArray.sort(() => Math.random() - 0.5);
  freeze = false;
  questionP.innerText = bibleTriviaQuestions[questionNum].question;

  for (let i = 0; i < answerArray.length; i++) {
    const answerOption = answerArray[i];
    buttons[i].innerHTML = `<span>${answerOption}</span>`;
    buttons[i].classList = "answer-button";
  }
}

function CheckQuestionUsed(questNum) {
  for (let i = 0; i < usedQuestions.length; i++) {
    const num = usedQuestions[i];

    if (questNum == num) return true;
  }
  return false;
}

function checkAnswer(answerButton) {
  if (freeze == true) return;
  if (answerButton.innerText == bibleTriviaQuestions[currentQuestionIndex].answer) {
    answerButton.classList.add('correct');
    score += 1;
    setScore();
    startTime += 1000;
    timerObj.classList.add('answerCorrect')
    freeze = true;
    setTimeout(nextQuestion, 500);
  }
  else {
    if (answerButton.classList.contains('incorrect')) return;
    answerButton.classList.add('incorrect');
    timerObj.classList.add('answerIncorrect');
    score -= 1;
    setScore();
    startTime -= 2000;
  }
}

function setScore() {
  scoreP.textContent = `Your score is ${score}`;
}

function StartTimer() {
  startTime = Date.now()
  setInterval(() => {
    var timeLeft = (gameTime - Math.floor((Date.now() - startTime) / 1000));
    if (timeLeft <= 0) {
      sessionStorage.setItem('score', score);
      window.location.href = './leaderboard'
    }
    timerObj.innerHTML = `Time: ${timeLeft}`;
  }, 100);
}