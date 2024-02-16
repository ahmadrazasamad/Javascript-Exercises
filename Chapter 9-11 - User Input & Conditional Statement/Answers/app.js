// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
const city = prompt("Enter your city name:");
if (city === "Karachi") {
    alert("Welcome to city of lights");
}

// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
const gender = prompt("Enter your gender:");
if (gender === "male") {
    alert("Good Morning Sir");
} else if (gender === "female") {
    alert("Good Morning Ma’am");
}

// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:
    // Signal color     Message
    // Red              Must Stop
    // Yellow           Ready to move
    // Green            Move now
const trafficSignalColor = prompt("Enter color of road traffic signal:");
if (trafficSignalColor === "Red") {
    alert("Must Stop");
} else if (trafficSignalColor === "Yellow") {
    alert("Ready to move");
} else if (trafficSignalColor === "Green") {
    alert("Move now");
}
/* instead of the last else if we can also use only else like this 
    // else {
    //        alert("Move now");
    // }
*/

// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”
const remainingFuel = +prompt("Enter the remaining amount of fuel in car(in litres):");
if (remainingFuel < 0.25)
    alert("Please refill the fuel in your car"); // if there is only one line in the if block we can simply just do the work without the braces, in this case giving indentation is a good practice

// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.
    /* a. var a = 4;
    if (++a === 5){
        alert("given condition for variable a is true");
    } It would be displayed */

    /* b. var b = 82;
    if (b++ === 83){
        alert("given condition for variable b is true");
    } It would not be displayed */

    /* c. var c = 12;
    if (c++ === 13){
        alert("condition 1 is true");
    } It would not be displayed
    if (c === 13){
        alert("condition 2 is true");
    } It would be displayed
    if (++c < 14){
        alert("condition 3 is true");
    } It would not be displayed
    if(c === 14){
        alert("condition 4 is true");
    } It would be displayed */

    /* d. var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost){
        alert("The cost equals");
    } It would be displayed */

    /* e. if (true){
        alert("True");
    } It would be displayed
    if (false){
        alert("False");
    } It would not be displayed */

    /* f. if("car" < "cat"){
        alert("car is smaller than cat");
    } It would be displayed as there is lexiographical comparision going on; lexiographical comparison is the comparison in which both the words are compared on the base of their alphabetical order, now in this case first cis compared to c which is equal, then a is compared to a which is also equal then r is compared to t now they are not equal and as t comes after r so it is greater than r and hence cat is greater than car */

// 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:
    // Percentage%                      Grade       Remarks 
    // Greater than or equal to 80      A-one       Excellent
    // Greater than or equal to 70      A           Good
    // Greater than or equal to 60      B           You need to improve
    // Less than 60                     Fail        Sorry
// Show the total marks, marks obtained, percentage, grade & remarks
const text = document.getElementById("text");

const sub1ObtMarks = +prompt("Enter marks of subejct 1:");
const sub2ObtMarks = +prompt("Enter marks of subejct 2:");
const sub3ObtMarks = +prompt("Enter marks of subejct 3:");

const marksObtained = sub1ObtMarks + sub2ObtMarks + sub3ObtMarks;

const TOTAL_MARKS_OF_ONE_SUBJECT = 100;
const TOTAL_MARKS = TOTAL_MARKS_OF_ONE_SUBJECT * 3; // as there are total three subjects

const percentage = ((marksObtained / TOTAL_MARKS) * 100).toFixed(2); // .toFixed() is used in here to fix the decimal number

let grade = "";
let remarks = "";
if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}

text.innerHTML = `<h1>Marks Sheet</h1><br/>
    <p>Total marks: ${TOTAL_MARKS}</p>
    <p>Marks Obtained: ${marksObtained}</p>
    <p>Percentage: ${percentage}%</p>
    <p>Grade: ${grade}</p>
    <p>Remarks: ${remarks}</p>
`;

// 7. Guess game: Store a secret number (ranging from 1 to 10) in a variable.Prompt user to guess the secret number.
    // a. If user guesses the same number, show “Bingo! Correct answer”.
    // b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.
const a = 7;
const userGuess = +prompt("Take a guess:");
if (userGuess === a) {
    alert("Bingo! Correct answer");
} else if ((userGuess + 1) === a) {
    alert("Close enough to the correct answer");
}

// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.
const num = +prompt("Enter a number:");
if ((num % 3) === 0) {
    alert(`${num} is divisible by 3`);
}

// 9. Write a program that checks whether the given input is an even number or an odd number.
const number = +prompt("Enter a number:");
if (number % 2 === 0) {
    alert(`${number} is an even number.`);
} else {
    alert(`${number} is an odd number.`);
}

// 10. Write a program that takes temperature as input and shows a message based on following criteria
    // a. T > 40 then “It is too hot outside.”
    // b. T > 30 then “The Weather today is Normal.”
    // c. T > 20 then “Today’s Weather is cool.”
    // d. T > 10 then “OMG! Today’s weather is so Cool.”
const temperature = +prompt("Enter today's temperature:");
if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} else {
    alert("OMG! Today’s weather is so Cool.");
}

// 11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
    // a. First number
    // b. Second number
    // c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
const firstNum = +prompt("Enter first number:");
const secondNum = +prompt("Enter second number:");
const operation = prompt("What operation do you want operate on two numbers(+, -, *, /, %):")

if (operation === '+') {
    alert(`${firstNum} + ${secondNum} = ${firstNum + secondNum}`);
} else if (operation === '-') {
    alert(`${firstNum} - ${secondNum} = ${firstNum - secondNum}`);
} else if (operation === '*') {
    alert(`${firstNum} x ${secondNum} = ${firstNum * secondNum}`);
} else if (operation === '/') {
    alert(`${firstNum} / ${secondNum} = ${firstNum / secondNum}`);
} else {
    alert(`${firstNum} % ${secondNum} = ${firstNum % secondNum}`);
} 