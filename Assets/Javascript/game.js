let questions = [["Q1", "C1", "C2", "C3", "C4"],
                ["Q2", "C1", "C2", "C3", "C4",],
                ["Q3", "C1", "C2", "C3", "C4",],
                ["Q4", "C1", "C2",]];
function displayQuestion(){
let randNum = Math.floor(Math.random() * questions.length);
console.log(randNum);

document.getElementById("questions").innerHTML = questions[randNum][0];
document.getElementById("choice1").innerHTML = questions[randNum][1];
document.getElementById("choice2").innerHTML = questions[randNum][2];
document.getElementById("choice3").innerHTML = questions[randNum][3];
document.getElementById("choice4").innerHTML = questions[randNum][4];

 /* Check 3rd choice exists and display it */
 if (typeof questions[randNum][3] !== "undefined") {
    document.getElementById("choice3").innerHTML = questions[randNum][3];
  } else document.getElementById("choice3").innerHTML = "";

  /* Check 4th choice exists and display it */
 if (typeof questions[randNum][4] !== "undefined") {
    document.getElementById("choice4").innerHTML = questions[randNum][4];
  } else document.getElementById("choice4").innerHTML = "";
}

displayQuestion();
