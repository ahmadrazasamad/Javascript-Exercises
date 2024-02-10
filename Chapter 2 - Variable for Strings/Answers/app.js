// variable can be made in js by three ways namely: var(not recommended), let, const

// 1. Declare a variable called username

/* two ways to do it */
let username;
// or var username;

// 2. Declare a variable called myName & assign to it a string that represents your Full Name.

/* two ways to do it */
const myName = "Ahmad Raza";
// or let myName = "Ahmad Raza";

// 3. Write script to o) Declare a JS variable, titled message. o) Assign “Hello World” to variable message o) Display the message in alert box.
let message; // variable declaration
message = "Hello World"; // value assigning
alert(message);// value display

// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
const studentName = "Muhammad Ibrahim";
const studentAge = 17;
const studentCertification = "Certified Mobile Application Development";

alert(studentName);
alert(studentAge);
alert(studentCertification);

// 5. Write a script to display the following alert using one JS variable:
alert("PIZZA\nPIZZ\nPIZ\nPI\nP");

// 6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)
const email = "ahmadrazasamad@gmail.com";

/* there are also two ways to do string concatenation */
alert("My email address is " + email);
// or alert(`My email address is ${email}`); // advanced

// 7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box
const book = "A smarter way to learn JavaScript";
alert(`I am trying to learn from the Book ${book}`);

// 8. Write a script to display this in browser through JS
document.write("Yah! I can write HTML content through Javascript");