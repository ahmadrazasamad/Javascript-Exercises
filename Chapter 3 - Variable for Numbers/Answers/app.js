// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.
let age; // variable declaration
age = 20; // value assigning
alert(`I am ${age} years old.`); // value display

// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.
let visits; // variable declaration
visits = 15; // value assign
alert(`You have visited this site ${visits} times`);

// 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
let birthYear; // variable declaration
birthYear = 2003; // value assign
document.write(`My birth year is ${birthYear}<br/>Datatype of my declared variable is ${typeof(birthYear)}`);

// 4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: a. Visitor’s name b. Product title c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
const visitorName = "Shaq";
const productTitle = "Pant";
const quantity = 3;
document.write(`${visitorName} ordered ${quantity} ${productTitle}(s) on XYZ Clothing store`);