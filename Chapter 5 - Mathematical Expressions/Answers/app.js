// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
const numOne = Number(prompt("Enter first number for addition:"));
const numTwo = Number(prompt("Enter second number for addition:"));

const sum = num1 + num2;
document.write(`Sum of ${num1} and ${num2} is ${sum}`);

// 2. Repeat task1 for subtraction, multiplication, division & modulus.
const num1 = Number(prompt("Enter first number for arithmatical operations:"));
const num2 = Number(prompt("Enter second number for arithmatical operations:"));

const subtraction = num2 - num1;
document.write(`${num2} - ${num1} is ${subtraction}<br/>`);

const multiplication = num1 * num2;
document.write(`${num1} x ${num2} is ${multiplication}<br/>`);

const division = num1 / num2;
document.write(`${num1} / ${num2} is ${division}<br/>`);

const modulus = num1 % num2;
document.write(`${num1} % ${num2} is ${modulus}`);

// 3. Do the following using JS Mathematic Expressions
    // a. Declare a variable.
    // b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
    // c. Initialize the variable with some number.
    // d. Show the value of variable in your browser like “Initial value: 5”.
    // e. Increment the variable.
    // f. Show the value of variable in your browser like “Value after increment is: 6”.
    // g. Add 7 to the variable.
    // h. Show the value of variable in your browser like “Value after addition is: 13”.
    // i. Decrement the variable.
    // j. Show the value of variable in your browser like “Value after decrement is: 12”.
    // k. Show the remainder after dividing the variable’s value  by 3. 
    // l. Output : “The remainder is : 0”.
let a; // variable declaration
document.write(`Value after variable declaration is ${a}<br/>`); // display of value after declaration

a = 21; // value initialization
document.write(`Initial value: ${a}<br/>`);

a++; // value increamentation
document.write(`Value after increment is: ${a}<br/>`);

a = a + 7; // addition of 7 to the variable
document.write(`Value after addition is: ${a}<br/>`);

a--; // value decreamentation
document.write(`Value after decrement is: ${a}<br/>`);

const remainder = a % 3;
document.write(`The remainder is: ${remainder}`);

// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
const COST_OF_TICKET = 600;
let ticketsToBuy = 5;

document.write(`Total cost to buy ${ticketsToBuy} ticket(s) to a movie is ${COST_OF_TICKET * ticketsToBuy}PKR`);

// 5. Write a script to display multiplication table of any number in your browser.
const num = 5;
document.write(`Table of ${num}<br/>`);
document.write(`${num}x1 = ${num * 1}<br/>`);
document.write(`${num}x2 = ${num * 2}<br/>`);
document.write(`${num}x3 = ${num * 3}<br/>`);
document.write(`${num}x4 = ${num * 4}<br/>`);
document.write(`${num}x5 = ${num * 5}<br/>`);
document.write(`${num}x6 = ${num * 6}<br/>`);
document.write(`${num}x7 = ${num * 7}<br/>`);
document.write(`${num}x8 = ${num * 8}<br/>`);
document.write(`${num}x9 = ${num * 9}<br/>`);
document.write(`${num}x10 = ${num * 10}<br/>`);

// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
    // a. Store a Celsius temperature into a variable.
    // b. Convert it to Fahrenheit & output “NNoC is NNoF”.
    // c. Now store a Fahrenheit temperature into a variable.
    // d. Convert it to Celsius & output “NNoF is NNoC”
const celsiusTemperature = 21;
let fahrenheitTemperatureCalculated = ((celsiusTemperature) * (9 / 5)) + 32;
document.write(`${celsiusTemperature}°C is ${fahrenheitTemperatureCalculated}°F<br/>`);

const fahrenheitTemperature = 48;
let celsiusTemperatureCalculated = (fahrenheitTemperature - 32) * (5 / 9);
document.write(`${fahrenheitTemperature}°F is ${celsiusTemperatureCalculated}°C`);

// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
    // a. Price of item 1
    // b. Price of item 2
    // c. Ordered quantity of item 1
    // d. Ordered Quantity of item 2
    // e. Shipping charges
// Compute the total cost & show the receipt in your browser
document.write("<h1>Shopping Cart</h1><br/>");

const priceOfItem1 = 550;
document.write(`<p>Price of Item 1 is ${priceOfItem1}</p>`);
const qtyOfItem1 = 3;
document.write(`<p>Quantity of Item 1 is ${qtyOfItem1}</p>`);

const priceOfItem2 = 300;
document.write(`<p>Price of Item 2 is ${priceOfItem2}</p>`);
const qtyOfItem2 = 5;
document.write(`<p>Quantity of Item 2 is ${qtyOfItem2}</p>`);

const shippingCharges = 500;
document.write(`<p>Shipping Charges ${shippingCharges}</p><br/>`);

const totalBill = (priceOfItem1 * qtyOfItem1) + (priceOfItem2 * qtyOfItem2) + shippingCharges;
document.write(`<p>Total cost of your order is ${totalBill}</p>`);

// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
const TOTAL_MARKS = 865;
const obtainedMarks = 795;

document.write(`<h1>Marks Sheet</h1><br/>`);
document.write(`<p>Total Marks: ${TOTAL_MARKS}</p>`);
document.write(`<p>Obtained Marks: ${obtainedMarks}</p>`);

const percentage = (obtainedMarks / TOTAL_MARKS) * 100;
document.write(`<p>Percentage: ${percentage}%</p>`);

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
const USD_CONVERSION_RATE = 104.80;
const SAUDI_RIYAL_CONVERSION_RATE = 28;

const totalUSDAvail = 10;
const totalSRiyalAvail = 25;

const totalPkr = (USD_CONVERSION_RATE * totalUSDAvail) + (SAUDI_RIYAL_CONVERSION_RATE * totalSRiyalAvail);

document.write(`<h1>Currency in PKR</h1><br/>`);
document.write(`<p>Total Currency in PKR: ${totalPkr}</p>`);

// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
    // a. Add 5
    // b. Multiply by 10
    // c. Divide the result by 2
// Perform all calculations in a single expression
let b = 10; // variable initialization
b = ((b + 5) * 10) / 2;

// 11. The Age Calculator: Forgot how old someone is? Calculate it!
    // a. Store the current year in a variable.
    // b. Store their birth year in a variable.
    // c. Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN years old”.
const currentYear = 2024;
const birthYear = 2003;
const age = currentYear - birthYear;

document.write(`<h1>Age Calculator</h1><br/>`);
document.write(`<p>Current Year: ${currentYear}</p>`);
document.write(`<p>Birth Year: ${birthYear}</p>`);
document.write(`<p>Your age is: ${age}</p>`);

// 12. The Geometrizer: Calculate properties of a circle.
    // a. Store a radius into a variable.
    // b. Calculate the circumference based on the radius, and output “The circumference is NN”.
// Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
document.write(`<h1>The Geometrizer</h1><br/>`);

const radius = 25;
const circumference = 2 * 3.141 * radius;
// or const circumference = 2 * Math.PI * radius;
document.write(`<p>Radius of a Circle: ${radius}</p>`);
document.write(`<p>The circumference is: ${circumference}</p>`);

const area = 3.141 * radius * radius;
// or const area = 3.141 * Math.pow(radius, 2);
document.write(`<p>The area is: ${circumference}</p>`);

// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
    // a. Store your favorite snack into a variable
    // b. Store your current age into a variable.
    // c. Store a maximum age into a variable.
    // d. Store an estimated amount per day (as a number).
    // e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”
document.write(`<h1>The Lifetime Supply Calculator</h1><br/>`);
const favSnack = "Cheeki";
const currentAge = 20;
const estMaxAge = 66;
const estSnackAmountPerDay = 2;

document.write(`<p>Favourite Snack: ${favSnack}</p>`);
document.write(`<p>Current age: ${currentAge}</p>`);
document.write(`<p>Estimated maximum age: ${estMaxAge}</p>`);
document.write(`<p>Amount of snacks per day: ${estSnackAmountPerDay}</p>`);

const estRemainingYears = estMaxAge - currentAge;
const estDaysRemaining = estRemainingYears * 365;
const totalSnacksNeeded = estDaysRemaining * estSnackAmountPerDay;
document.write(`<p>You will need ${totalSnacksNeeded} to last you until the ripe old age of ${estMaxAge}</p>`);