var questions = [
    {
      question: "What was googles original name? ",
      choices: ["GrayMatter", "BackRub", "elgoog"],
      correctAnswer: 1
    },
    {
      question: "What did Jeff Bezos want to originally want to name his company? ",
      choices: ["Jungles", "Relentless", "BooksOhyeah"],
      correctAnswer: 1
    },
    {
      question: "What is the capital of Spain?",
      choices: ["Paris", "Rome", "Madrid"],
      correctAnswer: 2
    }
  ];
  
  var currentQuestion = 0;
  var timeLimit = 10; // time limit in seconds
  var timeLeft = timeLimit;
  var timer;
  
  function startQuiz() {
    document.getElementById("quiz").innerHTML = "";
    document.getElementById("response").innerHTML = "";
    document.getElementById("timer").innerHTML = "Time left: " + timeLeft + " seconds";
    timer = setInterval(updateTimer, 1000);
    loadQuestion();
  }
  
  function loadQuestion() {
    var q = questions[currentQuestion];
    document.getElementById("quiz").innerHTML = "<h2>" + q.question + "</h2>" +
      "<button onclick='checkAnswer(0)'>" + q.choices[0] + "</button>" +
      "<button onclick='checkAnswer(1)'>" + q.choices[1] + "</button>" +
      "<button onclick='checkAnswer(2)'>" + q.choices[2] + "</button>";
  }
  
  function checkAnswer(answer) {
    var response;
    if (questions[currentQuestion].correctAnswer === answer) {
      response = "Correct!";
      timeLeft += 2;
      currentQuestion++; // add 2 seconds if correct
    } else {
      response = "Incorrect!";
    }

    document.getElementById("response").innerHTML = response;
    
    if (currentQuestion >= questions.length) {
      clearInterval(timer);
      document.getElementById("timer").innerHTML = "";
      document.getElementById("quiz").innerHTML = "";
      document.getElementById("response").innerHTML = "Quiz completed! Your score is: " + timeLeft + " seconds";
      // store score in local storage
      var storedScores = localStorage.getItem("scores");
      var scores = storedScores ? JSON.parse(storedScores) : [];
      scores.push(timeLeft);
      localStorage.setItem("scores", JSON.stringify(scores));
    } else {
      loadQuestion();
    }
  }
  
  function updateTimer() {
    timeLeft--;
    if(timeLeft > 0) {
        document.getElementById("timer").innerHTML = "Time Left:" + timeLeft + "seconds";
    } else if (timeLeft === 0){
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "";
        document.getElementById("quiz").innerHTML = "";
        document.getElementById("response").innerHTML ="Quiz complete! your score is:" + timeLeft + "seconds";
    }
    document.getElementById("timer").innerHTML = "Time left: " + timeLeft + " seconds";
}