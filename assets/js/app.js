//variable containing all the questions
var questions = [
    { question: "Question #1: Which of the following is not a value type?", answers: ["String", "Boolean", "Alert", "Number"], correct: "Alert" },
  
    { question: "Question #2: What are variables in an array called?", answers: ["Objects", "Strings", "Arguments", "None of the above"], correct: "Arguments" },
  
    { question: "Question #3: setInterval() method calls a function at specified intervals of how long?", answers: ["Seconds", "Hundredths", "Thousandths", "milliseconds"], correct: "milliseconds" },
  
    { question: "Question #4: Which of these symbols checks type and value?", answers: ["%", "==", "||", "==="], correct: "===" },
  
    { question: "Question #5: What does ! mean?", answers: ["Not", "Or", "Undefined", "Null"], correct: "Not" },
  ];
  
  var highscoreListLocal = [];
  let highscoreList = [];
  var gameResult = {};
  var questionLog = 0;
  var playerScore = 0;
  var timer,
    counter = 80;
  var player = {};
  var playerName = "";
  var trackEndGame = 0;
  
  
  // Shows questions
  function showQuestion() {
    document.getElementById("question").innerHTML =
      questions[questionLog].question;
    document.getElementById("answer-1").innerHTML =
      questions[questionLog].answers[0];
    document.getElementById("answer-2").innerHTML =
      questions[questionLog].answers[1];
    document.getElementById("answer-3").innerHTML =
      questions[questionLog].answers[2];
    document.getElementById("answer-4").innerHTML =
      questions[questionLog].answers[3];
  }
  //sets the timer
  function countdown() {
    document.getElementById("counter").innerHTML = counter;
    timer = setInterval(function () {
      counter--;

      document.getElementById("counter").innerHTML = counter;
      if (counter === 0 && trackEndGame === 0) {
        clearInterval(timer);
        endGame();
      }
    }, 1000);
  }
  
  //function to start quiz
  function startGame() {
    var quizScreen = document.getElementById("quiz");
    var quizInstructions = document.getElementById("directions");
    var timerTime =  document.getElementById("timerText");
    timerTime.classList.remove("invisible");
    quizInstructions.classList.add("invisible");
    quizScreen.classList.remove("invisible");
    quizScreen.classList.add("start");
    showQuestion();
  }
  
  
  
  //click events to submit questions start
  document.getElementById("answer-1").addEventListener("click", function () {
    if (this.textContent === questions[questionLog].correct) {
      console.log("correct");
      //show correct on result
      document.getElementById("result").innerHTML ="CORRECT!"
    } else {
      console.log("incorrect");
      //show result incorrect
      document.getElementById("result").innerHTML ="INCORRECT!"
      counter = counter - 10;
    }
    questionLog++;
    if (questionLog === questions.length) {
      endGame();
    } else {
      showQuestion();
    }
  });
  
  
  document.getElementById("answer-2").addEventListener("click", function () {
    if (this.textContent === questions[questionLog].correct) {
      console.log("correct");
      //show correct on result
      document.getElementById("result").innerHTML ="CORRECT!"
    } else {
      console.log("incorrect");
      //show result incorrect
      document.getElementById("result").innerHTML ="INCORRECT!"
      counter = counter - 10;
    }
    questionLog++;
    if (questionLog === questions.length) {
      endGame();
    } else {
      showQuestion();
    }
  });
  
  
  
  
  document.getElementById("answer-3").addEventListener("click", function () {
    if (this.textContent === questions[questionLog].correct) {
      console.log("correct");
      //show correct on result
      document.getElementById("result").innerHTML ="CORRECT!"
    } else {
      console.log("incorrect");
      //show result incorrect
      document.getElementById("result").innerHTML ="INCORRECT!"
  
      counter = counter - 10;
    }
    questionLog++;
    if (questionLog === questions.length) {
      endGame();
    } else {
      showQuestion();
    }
  });
  
  
  
  document.getElementById("answer-4").addEventListener("click", function () {
    if (this.textContent === questions[questionLog].correct) {
      console.log("correct");
      //show correct on result
      document.getElementById("result").innerHTML ="CORRECT!"
    } else {
      console.log("incorrect");
      //show result incorrect
      document.getElementById("result").innerHTML ="INCORRECT!"
  
      counter = counter - 10;
    }
    questionLog++;
    if (questionLog === questions.length) {
      endGame();
    } else {
      showQuestion();
    }
  });

  function endGame() {
    var quizScreen = document.getElementById("quiz");
    var quizInstructions = document.getElementById("directions");
    var timeLeft = document.getElementById("timerText");
    trackEndGame = 1;
    playerScore = counter;
    document.getElementsByClassName("countDown")
    quizInstructions.classList.add("invisible");
    quizScreen.classList.add("invisible");
    document.getElementById("result").innerHTML = ("Your Score - " + playerScore + "!");
    timeLeft.classList.add("invisible");

   // Adds Your Score
  var playerNameEnter = window.prompt("Enter your name to save your score!");
  if (!playerNameEnter){
  window.alert("Would you like to try again?");
  window.location.reload();
  } else {
  window.alert("SAVING YOUR SCORE!")

  playerName = playerNameEnter;
  
  toHighscoreList();
  document.getElementById("result").innerHTML = ("HIGHSCORE LIST:\n" + playerName + " " + playerScore + highscoreListLocal);
  console.log(highscoreListLocal);
  
  document.getElementById("highscoreButton").classList.remove("invisible");
   }
  
  }
// starts a new game
  function startNewGame(){
    location.reload()
  }
  
  
  function toHighscoreList() {
    gameResult = {playerId: playerName, score: playerScore};
     player = gameResult;
     highscoreList.push(gameResult);
  
     // Saves highscore in local storage
     var myObj = highscoreList;
     var myJSON = JSON.stringify(myObj);
     localStorage.setItem("highscoreList", myJSON);
     
      let text = localStorage.getItem("highscoreList");
       highscoreListLocal = JSON.parse(text);
     
    
       console.log(highscoreList);
       console.log(player);
       console.log(gameResult);
       console.log(playerName);
       console.log(playerScore);
    
  
  };
  
  //click event to start game
  document.getElementById("startButton").addEventListener("click", startGame);
  document.getElementById("startButton").addEventListener("click", countdown);