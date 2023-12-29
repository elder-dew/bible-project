var buttons = document.getElementsByClassName("answer-button");
var questionP = document.getElementById("question");
var currentQuestionIndex;
var freeze;
var score = 0;
var scoreP = document.getElementById("scoreP");
const pages = document.querySelectorAll(".page")

const bibleTriviaQuestions = [
  {
    "question": "In which book of the Bible did Moses receive the Ten Commandments?",
    "options": ["Genesis", "Exodus", "Leviticus", "Numbers"],
    "answer": "Exodus"
  },
  {
    "question": "Who was known as the wisest man in the Bible?",
    "options": ["David", "Solomon", "Daniel", "Joseph"],
    "answer": "Solomon"
  },
  {
    "question": "Which prophet was swallowed by a big fish?",
    "options": ["Jonah", "Elijah", "Isaiah", "Jeremiah"],
    "answer": "Jonah"
  },
  {
    "question": "Who betrayed Jesus to the authorities for 30 pieces of silver?",
    "options": ["Peter", "Judas Iscariot", "Thomas", "John"],
    "answer": "Judas Iscariot"
  },
  {
    "question": "Which city did Joshua and the Israelites march around for seven days?",
    "options": ["Jericho", "Bethlehem", "Jerusalem", "Nazareth"],
    "answer": "Jericho"
  },
  {
    "question": "Who was the first king of Israel?",
    "options": ["Saul", "David", "Solomon", "Samuel"],
    "answer": "Saul"
  },
  {
    "question": "Which disciple famously doubted Jesus' resurrection until he saw the wounds?",
    "options": ["Thomas", "Andrew", "James", "Philip"],
    "answer": "Thomas"
  },
  {
    "question": "Which woman was turned into a pillar of salt for looking back at Sodom?",
    "options": ["Ruth", "Sarah", "Lot's wife", "Hagar"],
    "answer": "Lot's wife"
  },
  {
    "question": "What was the name of the river in which John the Baptist baptized people?",
    "options": ["Jordan", "Nile", "Euphrates", "Tigris"],
    "answer": "Jordan"
  },
  {
    "question": "What is the first book of the New Testament?",
    "options": ["Matthew", "Mark", "Luke", "John"],
    "answer": "Matthew"
  },
  {
    "question": "Who was the mother of Jesus?",
    "options": ["Elizabeth", "Mary Magdalene", "Anna", "Mary"],
    "answer": "Mary"
  },
  {
    "question": "Which disciple denied Jesus three times before the rooster crowed?",
    "options": ["Peter", "Andrew", "James", "Judas"],
    "answer": "Peter"
  },
  {
    "question": "What is the last book of the Bible?",
    "options": ["Revelation", "Genesis", "Daniel", "Exodus"],
    "answer": "Revelation"
  },
  {
    "question": "Who was the first martyr of the early Christian church?",
    "options": ["Stephen", "Philip", "Barnabas", "Timothy"],
    "answer": "Stephen"
  },
  {
    "question": "In the story of the Good Samaritan, who passed by the injured man before the Samaritan helped him?",
    "options": ["Priest", "Levite", "Pharisee", "Scribe"],
    "answer": "Priest"
  },
  {
    "question": "Which king had a famous encounter with the prophet Elijah on Mount Carmel?",
    "options": ["King Saul", "King Solomon", "King Ahab", "King Josiah"],
    "answer": "King Ahab"
  },
  {
    "question": "What was the name of the disciple who replaced Judas Iscariot?",
    "options": ["Matthias", "Barnabas", "Silas", "Timothy"],
    "answer": "Matthias"
  },
  {
    "question": "Which Old Testament character is known for his patience despite facing severe trials?",
    "options": ["Job", "Abraham", "Moses", "Isaiah"],
    "answer": "Job"
  },
  {
    "question": "What did Jesus say is the greatest commandment?",
    "options": ["Love God with all your heart", "Love your neighbor as yourself", "Honor your parents", "Keep the Sabbath holy"],
    "answer": "Love God with all your heart"
  },
  {
    "question": "Who was the father of John the Baptist?",
    "options": ["Zechariah", "Joachim", "Simeon", "Eli"],
    "answer": "Zechariah"
  },
  {
    "question": "In the parable of the prodigal son, what did the younger son ask for in his share of the property?",
    "options": ["Money", "Land", "Livestock", "Jewels"],
    "answer": "Money"
  },
  {
    "question": "Which Old Testament figure is known for interpreting dreams in Egypt?",
    "options": ["Daniel", "Joseph", "Ezekiel", "Isaiah"],
    "answer": "Joseph"
  },
  {
    "question": "Who wrote the majority of the Psalms in the Bible?",
    "options": ["Moses", "David", "Solomon", "Asaph"],
    "answer": "David"
  },
  {
    "question": "What did Jesus turn water into at the wedding in Cana?",
    "options": ["Wine", "Milk", "Oil", "Honey"],
    "answer": "Wine"
  },
  {
    "question": "Which apostle was a tax collector before following Jesus?",
    "options": ["Peter", "Matthew", "John", "James"],
    "answer": "Matthew"
  },
  {
    "question": "What was the name of the giant Philistine warrior defeated by David with a sling and a stone?",
    "options": ["Goliath", "Saul", "Jonathan", "Ishbi-Benob"],
    "answer": "Goliath"
  },
  {
    "question": "In which book of the Bible do we find the story of Esther?",
    "options": ["Ruth", "Esther", "Judges", "Nehemiah"],
    "answer": "Esther"
  },
  {
    "question": "Who was the disciple known as the 'beloved disciple'?",
    "options": ["John", "James", "Peter", "Andrew"],
    "answer": "John"
  },
  {
    "question": "What did Jesus say is the second greatest commandment?",
    "options": ["Love your enemies", "Honor your parents", "Love your neighbor as yourself", "Keep the Sabbath holy"],
    "answer": "Love your neighbor as yourself"
  },
  {
    "question": "Who was the first high priest of Israel?",
    "options": ["Aaron", "Eli", "Samuel", "Phinehas"],
    "answer": "Aaron"
  },
  {
    "question": "Which prophet saw a vision of a valley of dry bones coming to life?",
    "options": ["Isaiah", "Jeremiah", "Ezekiel", "Daniel"],
    "answer": "Ezekiel"
  },
  {
    "question": "Who was the mother of Samuel?",
    "options": ["Hannah", "Rachel", "Leah", "Deborah"],
    "answer": "Hannah"
  },
  {
    "question": "What was the name of the city where Jesus was born?",
    "options": ["Jerusalem", "Nazareth", "Bethlehem", "Capernaum"],
    "answer": "Bethlehem"
  },
  {
    "question": "Who was the Roman governor that sentenced Jesus to be crucified?",
    "options": ["Herod", "Pilate", "Caesar", "Felix"],
    "answer": "Pilate"
  },
  {
    "question": "Which disciple walked on water with Jesus but began to sink due to doubt?",
    "options": ["Peter", "John", "Andrew", "James"],
    "answer": "Peter"
  },
  {
    "question": "What is the first commandment given to mankind in the Bible?",
    "options": ["Do not steal", "Do not murder", "Love God", "Honor your parents"],
    "answer": "Love God"
  },
  {
    "question": "Who was the father of King Solomon?",
    "options": ["David", "Saul", "Solomon", "Rehoboam"],
    "answer": "David"
  },
  {
    "question": "Which disciple was a tax collector before becoming a follower of Jesus?",
    "options": ["Matthew", "Philip", "Simon", "Thaddeus"],
    "answer": "Matthew"
  },
  {
    "question": "Who was the prophet taken to heaven in a chariot of fire?",
    "options": ["Elijah", "Elisha", "Isaiah", "Jeremiah"],
    "answer": "Elijah"
  },
  {
    "question": "What is the name of the river where Naaman, the Syrian commander, washed seven times to be healed?",
    "options": ["Jordan", "Nile", "Euphrates", "Tigris"],
    "answer": "Jordan"
  },
  {
    "question": "Who was the judge of Israel known for his strength and long hair?",
    "options": ["Gideon", "Samson", "Jephthah", "Ehud"],
    "answer": "Samson"
  },
  {
    "question": "What type of tree did Zacchaeus climb to see Jesus?",
    "options": ["Sycamore", "Olive", "Fig", "Palm"],
    "answer": "Sycamore"
  },
  {
    "question": "In the book of Acts, who was the first apostle to perform a miracle after Jesus' ascension?",
    "options": ["Peter", "John", "James", "Andrew"],
    "answer": "Peter"
  },
  {
    "question": "Which king saw the writing on the wall interpreted by Daniel?",
    "options": ["Nebuchadnezzar", "Cyrus", "Belshazzar", "Darius"],
    "answer": "Belshazzar"
  },
  {
    "question": "What was the name of the hill where Jesus was crucified?",
    "options": ["Golgotha", "Calvary", "Mount Zion", "Mount Moriah"],
    "answer": "Golgotha"
  },
  {
    "question": "Who was the first martyr mentioned in the Bible?",
    "options": ["Stephen", "Abel", "Enoch", "Seth"],
    "answer": "Abel"
  },
  {
    "question": "What did Jesus use to feed the 5,000 people in the miracle of the loaves and fishes?",
    "options": ["Barley", "Wheat", "Fish", "Lamb"],
    "answer": "Fish"
  },
  {
    "question": "In which city did Paul encounter a riot due to the worship of the goddess Artemis?",
    "options": ["Athens", "Corinth", "Ephesus", "Thessalonica"],
    "answer": "Ephesus"
  },
  {
    "question": "Who was the first woman created according to the Bible?",
    "options": ["Eve", "Sarah", "Rebekah", "Miriam"],
    "answer": "Eve"
  },
  {
    "question": "What was the name of the disciple who doubted Jesus' resurrection until he could touch the wounds?",
    "options": ["Thomas", "Andrew", "James", "Philip"],
    "answer": "Thomas"
  },
  {
    "question": "Who was the Old Testament prophet known for his weeping over Jerusalem?",
    "options": ["Isaiah", "Jeremiah", "Ezekiel", "Daniel"],
    "answer": "Jeremiah"
  },
  {
    "question": "In the book of Genesis, who was sold into slavery by his brothers?",
    "options": ["Joseph", "Jacob", "Esau", "Benjamin"],
    "answer": "Joseph"
  },
  {
    "question": "What was the name of the place where Jesus was arrested before his crucifixion?",
    "options": ["Bethlehem", "Nazareth", "Gethsemane", "Galilee"],
    "answer": "Gethsemane"
  },
  {
    "question": "Who was the father of John the Baptist?",
    "options": ["Zechariah", "Joachim", "Simeon", "Eli"],
    "answer": "Zechariah"
  },
  {
    "question": "In the parable of the sower, what does the seed represent?",
    "options": ["The Word of God", "Good deeds", "Money", "Friendship"],
    "answer": "The Word of God"
  },
  {
    "question": "Which disciple betrayed Jesus with a kiss in the Garden of Gethsemane?",
    "options": ["Peter", "Judas Iscariot", "John", "James"],
    "answer": "Judas Iscariot"
  },
  {
    "question": "Who was the king of Israel famous for his wisdom and building the temple in Jerusalem?",
    "options": ["Saul", "David", "Solomon", "Rehoboam"],
    "answer": "Solomon"
  },
  {
    "question": "Which book of the Bible is known as the 'Song of Solomon'?",
    "options": ["Psalms", "Proverbs", "Song of Solomon", "Ecclesiastes"],
    "answer": "Song of Solomon"
  },
  {
    "question": "Who was the wife of Isaac and the mother of Jacob and Esau?",
    "options": ["Rebekah", "Leah", "Rachel", "Zilpah"],
    "answer": "Rebekah"
  },
  {
    "question": "In the New Testament, who was converted on the road to Damascus after encountering a bright light?",
    "options": ["Peter", "James", "Paul", "Barnabas"],
    "answer": "Paul"
  },
  {
    "question": "What is the last book of the Old Testament?",
    "options": ["Malachi", "Zechariah", "Haggai", "Joel"],
    "answer": "Malachi"
  },
  {
    "question": "Who was the disciple known as the 'doubting Thomas'?",
    "options": ["John", "James", "Andrew", "Thomas"],
    "answer": "Thomas"
  },
  {
    "question": "What was the name of the tax collector who climbed a sycamore tree to see Jesus?",
    "options": ["Matthew", "Zacchaeus", "Philip", "Simon"],
    "answer": "Zacchaeus"
  },
  {
    "question": "Which Old Testament figure led the Israelites across the Jordan River into the Promised Land?",
    "options": ["Moses", "Joshua", "Caleb", "Gideon"],
    "answer": "Joshua"
  },
  {
    "question": "Who was the first king of Israel?",
    "options": ["Saul", "David", "Solomon", "Samuel"],
    "answer": "Saul"
  },
  {
    "question": "In the book of Genesis, who was Abraham's wife?",
    "options": ["Hagar", "Rachel", "Leah", "Sarah"],
    "answer": "Sarah"
  },
  {
    "question": "What was the name of the woman who anointed Jesus with expensive perfume?",
    "options": ["Mary Magdalene", "Martha", "Mary of Bethany", "Salome"],
    "answer": "Mary of Bethany"
  },
  {
    "question": "Who was the prophet that confronted King David after his sin with Bathsheba?",
    "options": ["Nathan", "Elijah", "Isaiah", "Elisha"],
    "answer": "Nathan"
  },
  {
    "question": "Who was the first woman mentioned in the Bible?",
    "options": ["Eve", "Sarah", "Rebekah", "Miriam"],
    "answer": "Eve"
  },
  {
    "question": "What is the shortest verse in the Bible?",
    "options": ["Jesus wept", "God is love", "The Lord is my shepherd", "For I know the plans I have for you"],
    "answer": "Jesus wept"
  },
  {
    "question": "Which disciple is known as the 'disciple whom Jesus loved'?",
    "options": ["Peter", "John", "James", "Andrew"],
    "answer": "John"
  },
  {
    "question": "What was the name of the man who helped Jesus carry the cross?",
    "options": ["Simon of Cyrene", "Joseph of Arimathea", "Nicodemus", "Barnabas"],
    "answer": "Simon of Cyrene"
  },
  {
    "question": "In the Old Testament, who was the father of David?",
    "options": ["Saul", "Jesse", "Samuel", "Eliab"],
    "answer": "Jesse"
  },
  {
    "question": "Which king of Israel was known for his wisdom and wealth?",
    "options": ["Solomon", "David", "Hezekiah", "Josiah"],
    "answer": "Solomon"
  },
  {
    "question": "Who was the Roman centurion present at the crucifixion of Jesus, declaring Him to be the Son of God?",
    "options": ["Centurion Cornelius", "Centurion Julius", "Centurion Longinus", "Centurion Augustus"],
    "answer": "Centurion Longinus"
  },
  {
    "question": "In the parable of the lost son, what did the father do when the son returned home?",
    "options": ["Scolded him", "Ignored him", "Celebrated with a feast", "Sent him away again"],
    "answer": "Celebrated with a feast"
  },
  {
    "question": "Who was the king of Babylon who saw the handwriting on the wall?",
    "options": ["Nebuchadnezzar", "Belshazzar", "Cyrus", "Darius"],
    "answer": "Belshazzar"
  },
  {
    "question": "Which prophet was carried away to heaven in a chariot of fire?",
    "options": ["Elijah", "Elisha", "Isaiah", "Jeremiah"],
    "answer": "Elijah"
  },
  {
    "question": "What was the name of the city where Jesus was born?",
    "options": ["Nazareth", "Jerusalem", "Bethlehem", "Capernaum"],
    "answer": "Bethlehem"
  },
  {
    "question": "Who was the first king anointed by the prophet Samuel?",
    "options": ["Saul", "David", "Solomon", "Jonathan"],
    "answer": "Saul"
  },
  {
    "question": "What was the name of the angel who announced the birth of Jesus to Mary?",
    "options": ["Gabriel", "Michael", "Raphael", "Uriel"],
    "answer": "Gabriel"
  },
  {
    "question": "Who wrote most of the Psalms in the Bible?",
    "options": ["Moses", "David", "Solomon", "Asaph"],
    "answer": "David"
  },
  {
    "question": "In the book of Acts, who was stoned to death for his faith in Jesus?",
    "options": ["Stephen", "Paul", "Barnabas", "Peter"],
    "answer": "Stephen"
  },
  {
    "question": "What was the name of the giant Philistine warrior defeated by David with a sling and a stone?",
    "options": ["Goliath", "Saul", "Jonathan", "Ishbi-Benob"],
    "answer": "Goliath"
  },
  {
    "question": "Which disciple was a tax collector before following Jesus?",
    "options": ["Matthew", "John", "James", "Andrew"],
    "answer": "Matthew"
  },
  {
    "question": "In the parable of the Good Samaritan, who passed by the injured man before the Samaritan helped him?",
    "options": ["Priest", "Levite", "Scribe", "Pharisee"],
    "answer": "Priest"
  },
  {
    "question": "What was the name of the river where John the Baptist baptized people?",
    "options": ["Jordan", "Nile", "Euphrates", "Tigris"],
    "answer": "Jordan"
  },
  {
    "question": "Which disciple of Jesus was a tax collector before becoming a follower?",
    "options": ["Matthew", "Simon Peter", "James", "John"],
    "answer": "Matthew"
  },
  {
    "question": "What was the name of the city where the disciples received the Holy Spirit on the day of Pentecost?",
    "options": ["Jerusalem", "Bethlehem", "Nazareth", "Capernaum"],
    "answer": "Jerusalem"
  },
  {
    "question": "Who wrote the majority of the New Testament epistles?",
    "options": ["Peter", "John", "Paul", "James"],
    "answer": "Paul"
  },
  {
    "question": "What is the last book of the New Testament?",
    "options": ["Revelation", "Romans", "Ephesians", "Hebrews"],
    "answer": "Revelation"
  },
  {
    "question": "What was the name of the man who replaced Judas Iscariot as one of the twelve disciples?",
    "options": ["Matthias", "Barnabas", "Silas", "Timothy"],
    "answer": "Matthias"
  },
  {
    "question": "Which Old Testament prophet was known for his visions of a valley of dry bones coming to life?",
    "options": ["Isaiah", "Jeremiah", "Ezekiel", "Daniel"],
    "answer": "Ezekiel"
  },
  {
    "question": "Who was the mother of John the Baptist?",
    "options": ["Elizabeth", "Mary", "Anna", "Rachel"],
    "answer": "Elizabeth"
  },
  {
    "question": "In the parable of the Prodigal Son, what did the younger son ask for from his father?",
    "options": ["His inheritance", "A new robe", "A feast", "A servant"],
    "answer": "His inheritance"
  },
  {
    "question": "What was the name of the mountain where Elijah confronted the prophets of Baal?",
    "options": ["Mount Sinai", "Mount Carmel", "Mount Horeb", "Mount Nebo"],
    "answer": "Mount Carmel"
  },
  {
    "question": "Who was the king of Israel when the angel announced the birth of Jesus to the shepherds?",
    "options": ["Herod", "Ahab", "Jehoshaphat", "David"],
    "answer": "Herod"
  },
  {
    "question": "For God so loved the world, that he gave his only ____________, that whoever believes in him should not perish but have eternal life.",
    "options": ["son", "daughter", "brother", "sister"],
    "answer": "son"
  },
  {
    "question": "I can do all things through ____________ who strengthens me.",
    "options": ["faith", "hope", "love", "Christ"],
    "answer": "Christ"
  },
  {
    "question": "The Lord is my shepherd; I shall not ____________.",
    "options": ["fear", "want", "lack", "sin"],
    "answer": "want"
  },
  {
    "question": "Trust in the Lord with all your ____________, and do not lean on your own understanding.",
    "options": ["heart", "mind", "soul", "strength"],
    "answer": "heart"
  },
  {
    "question": "For I know the plans I have for you, declares the Lord, plans for welfare and not for ____________, to give you a future and a hope.",
    "options": ["evil", "harm", "calamity", "disaster"],
    "answer": "evil"
  },
  {
    "question": "But the fruit of the Spirit is love, joy, peace, ____________, kindness, goodness, faithfulness, gentleness, self-control; against such things there is no law.",
    "options": ["patience", "anger", "war", "strife"],
    "answer": "patience"
  },
  {
    "question": "But God shows his love for us in that while we were still ____________, Christ died for us.",
    "options": ["sinners", "righteous", "ignorant", "unworthy"],
    "answer": "sinners"
  },
  {
    "question": "I am the ____________ of the world. Whoever follows me will not walk in darkness but will have the light of life.",
    "options": ["light", "truth", "way", "life"],
    "answer": "light"
  },
  {
    "question": "For where your ____________ is, there your heart will be also.",
    "options": ["treasure", "hope", "faith", "love"],
    "answer": "treasure"
  },
  {
    "question": "The Lord is near to the brokenhearted and saves the crushed in ____________.",
    "options": ["spirit", "soul", "heart", "mind"],
    "answer": "spirit"
  },
  {
    "question": "For I am not ashamed of the ____________, for it is the power of God for salvation to everyone who believes.",
    "options": ["gospel", "truth", "word", "testimony"],
    "answer": "gospel"
  },
  {
    "question": "The Lord is my ____________; I shall not want.",
    "options": ["refuge", "strength", "fortress", "shepherd"],
    "answer": "shepherd"
  },
  {
    "question": "And we know that in all things God works for the good of those who ____________ him, who have been called according to his purpose.",
    "options": ["love", "serve", "fear", "trust"],
    "answer": "love"
  },
  {
    "question": "I have fought the good ____________, I have finished the race, I have kept the faith.",
    "options": ["fight", "battle", "war", "race"],
    "answer": "fight"
  },
  {
    "question": "In the beginning, God created the heavens and the ____________.",
    "options": ["earth", "oceans", "skies", "universe"],
    "answer": "earth"
  },
  {
    "question": "But the ____________ is patient with you, not wanting anyone to perish, but everyone to come to repentance.",
    "options": ["Lord", "Spirit", "Master", "Father"],
    "answer": "Lord"
  },
  {
    "question": "And we know that in all things God works for the good of those who love him, who have been called according to his ____________.",
    "options": ["plan", "will", "purpose", "desire"],
    "answer": "purpose"
  },
  {
    "question": "For I am convinced that neither ____________ nor death, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.",
    "options": ["life", "angels", "height", "powers"],
    "answer": "life"
  },
  {
    "question": "For God did not give us a spirit of ____________, but of power, love, and self-discipline.",
    "options": ["fear", "weakness", "doubt", "confusion"],
    "answer": "fear"
  },
  {
    "question": "But the ____________ of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness, and self-control.",
    "options": ["work", "fruit", "manifestation", "blessing"],
    "answer": "fruit"
  }
]

window.onload = nextQuestion;

function nextQuestion() {
  questionNum = Math.floor(Math.random() * (bibleTriviaQuestions.length - 1));
  while (questionNum == currentQuestionIndex) { questionNum = Math.floor(Math.random() * (bibleTriviaQuestions.length - 1)); }

  currentQuestionIndex = questionNum;
  var answerArray = bibleTriviaQuestions[questionNum].options;
  answerArray.sort(() => Math.random() - 0.5);
  console.log(answerArray)
  freeze = false;
  questionP.innerText = bibleTriviaQuestions[questionNum].question;

  for (let i = 0; i < answerArray.length; i++) {
    const answerOption = answerArray[i];
    buttons[i].textContent = answerOption;
    buttons[i].classList = "answer-button";
  }
}

function checkAnswer(answerButton) {
  if (freeze == true) return;
  if (answerButton.innerText == bibleTriviaQuestions[currentQuestionIndex].answer) {
    answerButton.classList.add('correct');
    score += 1;
    setScore();
    freeze = true;
    setTimeout(nextQuestion, 500);
  }
  else {
    answerButton.classList.add('incorrect');
    score -= 1;
    setScore();
  }
}

  function setScore() {
    scoreP.textContent = score;
  }

  function switchPage(direction) {
    if(direction === 'down') {
      pages.forEach(
        pages => (pages.style.transform = `translateY(-5%)`)
      )
    }
    else if(direction === 'up') {
      pages.forEach(
        pages => (pages.style.transform = `translateY(5%)`)
      )
    }
    else {
      console.log("I'm confused")
    }
  }