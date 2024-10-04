/*Q.1.Prompt and If Statement:Write a script that asks the user "What is the capital of France?" If
the user answers "Paris", display an alert with "Correct!" Otherwise, display an alert with "Try
again!".*/
//Answer:
// var answer = prompt("What is the capital of France?");
// if(answer === "Paris"){
// alert("Correct!")
// }
// else{
// alert("Try again!");
// }

//====================================================================================================

/*Q.2.If-Else Statement: Modify the previous script to use an else statement. If the user's answer is
correct, display "Correct!", otherwise display "Incorrect, the correct answer is Paris."*/
//Answer:
// var answer = prompt("What is the capital of France?");
// if(answer === "Paris"){
// alert("Correct!")
// }
// else{
// alert("Incorrect, the correct answer is Paris");
// }

//=====================================================================================================

/*Q.3. Multiple Correct Answers: Write a program that asks the user, "What is the capital of the
United Kingdom?" If they answer "London" or "The United Kingdom", display "Correct!". Use an
if-else condition to check both possible answers.*/
//Answer:
// var answer = prompt("What is the capital of United Kingdom?");
// if(answer === "London" || answer === "United Kingdom"){
// alert("Correct!")
// }
// else if(answer === "Badeen"){
// alert("Incorrect but close")
// }
// else{
// alert("Incorrect")
// }

//=======================================================================================================

/*Q.4. Incrementing a Score: Modify a script to keep track of a score. Start with a score of 0. Every
time the user answers a question correctly, increment the score by 1 and display the updated
score.*/
//Answer:
// var score = 0;
// var score = prompt("What is the score of 10 + 10?");  
// score = parseInt(score);
// if (score === 20) {
// score++;
// alert("Correct! Your score is now: " + " " + score);
// } 
// else {
// alert("Incorrect. Your score remains: " + score);
// }

//=========================================================================================================

/*Q.5.Testing Multiple Variables: Write a script that asks the user two questions: "What is the capital
of Germany?" and "What is 10 + 10?" If both answers are correct ("Berlin" and 20), display "You
got both right!". If only one answer is correct, display "You got one correct!"*/
//Answer:
// var capitalAnswer = prompt("What is the capital of Germany?");
// var mathAnswer = prompt("What is 10 + 10?");
// var capitalCorrect = (capitalAnswer === "Berlin");
// var mathCorrect = mathAnswer === 20;

// if (capitalCorrect && mathCorrect) {
//     alert("You got both right!");
// } else if (capitalCorrect || mathCorrect) {
//     alert("You got one correct!");
// } else {
//     alert("You got both wrong.");
// }

//======================END OF EXERCISE -9================================================================= 



