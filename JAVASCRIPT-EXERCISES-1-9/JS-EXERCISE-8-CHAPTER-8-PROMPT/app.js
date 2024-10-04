/* Q.1. Write a script that asks the user, "What is your name?" and stores the answer in a
variable userName. Then, display an alert that says "Hello, [userName]!".*/
//Answer:
// var userName = prompt("What is your name?");
// alert("Hello" + " " + userName  + "!");

//================================================================================================================

/*Q.2. Create a prompt that asks the user, "How old are you?" and assigns the response to a variable
age. Display an alert that says "You are [age] years old." Handle the case where the user clicks
"Cancel" by displaying "No age provided" in the alert.*/
//Answer:
// var age = prompt("How old are you?");
// if (age === null) {
// alert("No age provided");
// } 
// else {
// alert("You are " + age + " years old.");
// }

//==================================================================================================================

/*Q.3.Write a prompt asking, "How many pets do you have?" and assign the response to a variable
pets. If the user enters nothing and clicks "OK", display an alert saying "You didn't enter
anything".*/
//Answer :
// var pets = prompt("How many pets do you have?");
// if (pets === "") {
// alert("You didn't enter anything");
// } 

//===================================================================================================================

/*Q.4. Write a script that asks the user "Enter a number between 1 and 10". Convert the user input to a
number, then multiply it by 2 and display the result in an alert.*/
//Answer:
// var userInput = prompt("Enter a number between 1 and 10");
// var number = Number(userInput);
// var result = number * 2;
// alert("The result of multiplying your number by 2 is :" + " " + result);

//===================================================================================================================

/*Q.5.Write a prompt that asks the user, "What is your favorite number?" and assigns the response to
a variable favNum. If the user does not provide a response and clicks "OK", assign a default
value of 7 to favNum and display it in an alert.*/
//Answer:
// var favNum = prompt("What is your favourite number? ");
// if (favNum === ""){
// alert("My favourite number is:" + " " + 7);
// }

//================================END OF EXERCISE - 8===============================================================




