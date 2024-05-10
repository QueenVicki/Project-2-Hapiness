let questions = [["Q1",1, "C1", "C2", "C3", "C4",],
                ["Q2", 3,"C1", "C2", "C3", "C4",],
                ["Q3",4, "C1", "C2", "C3", "C4",],
                ["Q4",1, "C1", "C2",]];

let randNum =0;
let score =0;

function displayQuestion(){
let randNum = Math.floor(Math.random() * questions.length);
console.log(randNum);

console.log(questions[randNum][1]);

document.getElementById("questions").innerHTML = questions[randNum][0];

document.getElementById("choice1").innerHTML = questions[randNum][2];
document.getElementById("choice2").innerHTML = questions[randNum][3];
// document.getElementById("choice3").innerHTML = questions[randNum][4];
// document.getElementById("choice4").innerHTML = questions[randNum][5];

 /* Check 3rd choice exists and display it */
 if (typeof questions[randNum][4] !== "undefined") {
    document.getElementById("choice3").innerHTML = questions[randNum][4];
  } else document.getElementById("choice3").innerHTML = "";

  /* Check 4th choice exists and display it */
 if (typeof questions[randNum][5] !== "undefined") {
    document.getElementById("choice4").innerHTML = questions[randNum][5];
  } else document.getElementById("choice4").innerHTML = "";
}

function checkAnswer(usersChoice) {

  if (usersChoice == questions[randNum][1]) {
    score++;
  } else score --;

    document.getElementById("score").innerHTML = score;
    displayQuestion();
}

/---------Main Processing starts here -------------------------*/
displayQuestion(); 
