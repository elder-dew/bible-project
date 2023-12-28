var buttons = document.getElementsByClassName("answer-button");
var questionP = document.getElementById("question");
var currentQuestionIndex;
var freeze;
var score = 0;
var scoreP = document.getElementById("scoreP");

const bibleTriviaQuestions = [
    {
      "question": "Who was the youngest son of Jacob in the Bible?",
      "options": ["Dan", "Reuben", "Joseph", "Benjamin"],
      "correctAnswer": "Benjamin"
    },
    {
      "question": "In the New Testament, who denied knowing Jesus three times before the rooster crowed?",
      "options": ["Peter", "John", "James", "Judas"],
      "correctAnswer": "Peter"
    },
    {
      "question": "Which disciple of Jesus was known as 'Doubting Thomas'?",
      "options": ["Peter", "John", "Thomas", "Andrew"],
      "correctAnswer": "Thomas"
    },
    {
      "question": "Who was the mother of Samuel, the prophet?",
      "options": ["Hannah", "Deborah", "Ruth", "Esther"],
      "correctAnswer": "Hannah"
    },
    {
      "question": "What is the central theme of the Book of Job?",
      "options": ["Suffering and faith", "Kingship in Israel", "Love and forgiveness", "Exodus"],
      "correctAnswer": "Suffering and faith"
    },
    {
      "question": "Who was the first woman created according to the Bible?",
      "options": ["Eve", "Sarah", "Rachel", "Leah"],
      "correctAnswer": "Eve"
    },
    {
      "question": "In the Old Testament, who led the Israelites in the conquest of Jericho?",
      "options": ["Joshua", "Moses", "Caleb", "Aaron"],
      "correctAnswer": "Joshua"
    },
    {
      "question": "Which king built the first temple in Jerusalem?",
      "options": ["Solomon", "David", "Saul", "Hezekiah"],
      "correctAnswer": "Solomon"
    },
    {
      "question": "Who wrote most of the Psalms in the Bible?",
      "options": ["David", "Solomon", "Asaph", "Ethan"],
      "correctAnswer": "David"
    },
    {
      "question": "What was the name of the river in which John the Baptist baptized people?",
      "options": ["Jordan", "Nile", "Euphrates", "Tigris"],
      "correctAnswer": "Jordan"
    },
    {
      "question": "Who was the mother of John the Baptist in the Bible?",
      "options": ["Elizabeth", "Mary", "Hannah", "Sarah"],
      "correctAnswer": "Elizabeth"
    },
    {
      "question": "Which king was known for his wisdom and for building the Temple in Jerusalem?",
      "options": ["Solomon", "David", "Saul", "Hezekiah"],
      "correctAnswer": "Solomon"
    },
    {
      "question": "In the New Testament, who was converted on the road to Damascus?",
      "options": ["Paul", "Peter", "John", "James"],
      "correctAnswer": "Paul"
    },
    {
      "question": "Who is known as the 'disciple whom Jesus loved' in the New Testament?",
      "options": ["John", "Peter", "James", "Andrew"],
      "correctAnswer": "John"
    },
    {
      "question": "In the Book of Exodus, what was the last plague on Egypt?",
      "options": ["Death of the firstborn", "Hail", "Locusts", "Darkness"],
      "correctAnswer": "Death of the firstborn"
    },
    {
      "question": "Who was the father of John the Baptist?",
      "options": ["Zechariah", "Simeon", "Eli", "Herod"],
      "correctAnswer": "Zechariah"
    },
    {
      "question": "Which Old Testament character was known for his strength and long hair?",
      "options": ["Samson", "David", "Gideon", "Elijah"],
      "correctAnswer": "Samson"
    },
    {
      "question": "What is the central theme of the Book of Job?",
      "options": ["Suffering and faith", "Kingship in Israel", "Love and forgiveness", "Exodus"],
      "correctAnswer": "Suffering and faith"
    },
    {
      "question": "Who was the first woman created according to the Bible?",
      "options": ["Eve", "Sarah", "Rachel", "Leah"],
      "correctAnswer": "Eve"
    },
    {
      "question": "In the Old Testament, who led the Israelites in the conquest of Jericho?",
      "options": ["Joshua", "Moses", "Caleb", "Aaron"],
      "correctAnswer": "Joshua"
    },
    {
      "question": "Which king built the first temple in Jerusalem?",
      "options": ["Solomon", "David", "Saul", "Hezekiah"],
      "correctAnswer": "Solomon"
    },
    {
      "question": "Who wrote most of the Psalms in the Bible?",
      "options": ["David", "Solomon", "Asaph", "Ethan"],
      "correctAnswer": "David"
    },
    {
      "question": "What was the name of the river in which John the Baptist baptized people?",
      "options": ["Jordan", "Nile", "Euphrates", "Tigris"],
      "correctAnswer": "Jordan"
    },
    {
      "question": "Who was the mother of John the Baptist in the Bible?",
      "options": ["Elizabeth", "Mary", "Hannah", "Sarah"],
      "correctAnswer": "Elizabeth"
    }
  ];

window.onload = nextQuestion;

function nextQuestion() {
    questionNum = Math.floor(Math.random() * bibleTriviaQuestions.length - 1);
    while (questionNum == currentQuestionIndex) questionNum = Math.floor(Math.random() * bibleTriviaQuestions.length - 1);
    currentQuestionIndex = questionNum;
    freeze = false;
    questionP.innerText = bibleTriviaQuestions[questionNum].question;

    for (let i = 0; i < bibleTriviaQuestions[questionNum].options.length; i++) {
        const answerOption = bibleTriviaQuestions[questionNum].options[i];
        buttons[i].textContent = answerOption;
        buttons[i].classList = "answer-button";
    }
}

function checkAnswer(answerButton) {
    if(freeze == true) return;
    if(answerButton.innerText == bibleTriviaQuestions[currentQuestionIndex].correctAnswer) {
        answerButton.classList.add('correct');
        score += 1;
        setScore();
        freeze = true;
        setTimeout(nextQuestion,500);
    }
    else {
        answerButton.classList.add('incorrect');
        score -= 1;
        setScore();
    }

function setScore() {
    scoreP.textContent = score;
}
}