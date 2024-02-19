// 1. Write a program that takes a character (number or alphabet) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122)
const character = prompt("Enter a character:");
const asciiCode = character.charCodeAt(0);

if (asciiCode >= 48 && asciiCode <= 57) {
    console.log("A deciaml is entered");
} else if (asciiCode >= 65 && asciiCode <= 90) {
    console.log("An uppercase letter is entered");
} else if (asciiCode >= 97 && asciiCode <= 122) {
    console.log("A lowercase letter is entered");
}

// 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
const firstNum = prompt("Enter first number:");
const secondNum = prompt("Enter second number:");

if (firstNum === secondNum) {
    console.log("Both the numbers are equal");
} else if (firstNum > secondNum) {
    console.log(`First number ${firstNum}, is greater than second number ${secondNum}`);
} else {
    console.log(`Second number ${secondNum}, is greater than first number ${firstNum}`);
}

// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.
const number = prompt("Enter a number:");
if (number === 0) {
    console.log("Number is zero.");
} else if (number > 0) {
    console.log("Number is positive.");
} else {
    console.log("Number is negative.");
}

// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
const alphabet = prompt("Enter an alphabet:"); // assuming the entered alphabet is lowercase by default
if (alphabet === 'a' || alphabet === 'e' || alphabet === 'i' || alphabet === 'o' || alphabet === 'u') {
    console.log("It is vowel");
} else {
    console.log("It is not a vowel, it is a consonant.");
}

// 5. Write a program that
    // a. Store correct password in a JS variable.
    // b. Asks user to enter his/her password
    // c. Validate the two passwords:
        // i. Check if user has entered password. If not, then give message “Please enter your password”
        // ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise
const password = "abcd123";
const userPassword = prompt("Enter your password:");

if (userPassword === "") {
    console.log("Please enter your password");
} else if (userPassword === password) {
    console.log("Correct! The password you entered matches the original password");
} else {
    console.log("Incorrect password");
}

// 6. This if/else statement does not work. Try to fix it:
    // var greeting;
    // var hour = 13;
    // if (hour < 18) {
    // greeting = "Good day";
    // else
    // greeting = "Good evening";
    // }

/* There is a syntax error in here, else should come after if block like this */
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case (flowchart given in Qusetions.pdf) using if, else & else if statements
const time = +prompt("Enter time in 24 hours clock format(like 2100):");
if (time >= 0 && time < 1200) {
    console.log("Good morning!");
} else if (time >= 1200 && time < 1700) {
    console.log("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
    console.log("Good evening!");
} else if (time >= 2100 && time < 2359) {
    console.log("Good night!");
}