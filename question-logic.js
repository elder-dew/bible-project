var buttons = document.getElementsByClassName("answer-button");
var questionP = document.getElementById("question");
var currentQuestionIndex;

const bibleTriviaQuestions = [
    {
      question: "Who was the youngest son of Jacob in the Bible?",
      options: ["Benjamin", "Reuben", "Joseph", "Dan"],
      correctAnswer: "Benjamin",
    },
    {
      question: "Who was the prophet that was swallowed by a great fish in the Bible?",
      options: ["Jonah", "Elijah", "Isaiah", "Jeremiah"],
      correctAnswer: "Jonah",
    },
    {
      question: "Which of the following apostles was a tax collector before following Jesus?",
      options: ["Matthew", "Peter", "James", "John"],
      correctAnswer: "Matthew",
    },
    {
      question: "What was the name of the woman who became queen and saved the Jewish people in the book of Esther?",
      options: ["Esther", "Sarah", "Ruth", "Leah"],
      correctAnswer: "Esther",
    },
    {
      question: "In the parable of the Prodigal Son, what did the younger son ask for from his father?",
      options: ["Inheritance", "Land", "Wealth", "Livestock"],
      correctAnswer: "Inheritance",
    },
  ];

function nextQuestion() {
    var questionNum = Math.floor(Math.random() * 4);
    currentQuestionIndex = questionNum;
    questionP.innerText = bibleTriviaQuestions[questionNum].question;

    for (let i = 0; i < bibleTriviaQuestions[questionNum].options.length; i++) {
        const answerOption = bibleTriviaQuestions[questionNum].options[i];
        buttons[i].textContent = answerOption;
    }
}

function checkAnswer(answerButton) {
    if(answerButton.innerText == bibleTriviaQuestions[currentQuestionIndex].correctAnswer) {
        console.log("Water comes from rain...Correct");
    }
    else {
        console.log("I froze you...Not correct");
    }
}