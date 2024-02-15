// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
const text = document.getElementById("text");
let num = +prompt("Enter a number:"); // placement of + like this is also used for converting a string into a number

text.innerHTML = "<p>Result</p>";
text.innerHTML += `<p>The value of a is ${num}</p>`;
text.innerHTML += `----------------------------------------`;

text.innerHTML += `<p>The value of ++a is: ${++num}</p>`;
text.innerHTML += `<p>Now the value of a is: ${num}</p><br/>`;

text.innerHTML += `<p>The value of a++ is: ${num++}</p>`;
text.innerHTML += `<p>Now the value of a is: ${num}</p><br/>`;

text.innerHTML += `<p>The value of --a is: ${--num}</p>`;
text.innerHTML += `<p>Now the value of a is: ${num}</p><br/>`;

text.innerHTML += `<p>The value of a-- is: ${num--}</p>`;
text.innerHTML += `<p>Now the value of a is: ${num}</p><br/>`;

// 2. What will be the output in variables a, b & result after execution of the following script:
    // var a = 2, b = 1;
    // var result = --a - --b + ++b + b--;
    // Explain the output at each stage:
        // --a;
        // --a - --b;
        // --a - --b + ++b;
        // --a - --b + ++b + b--;
let a = 2;
let b = 1;

let result = --a - --b + ++b + b--;
// --a is 1
// --a is 1 and --b is 0 so 1 - 0 = 1
// --a is 1 and --b is 0 so 1 - 0, and ++b is 1 so 1 - 0 + 1 is 2
// --a is 1 and --b is 0 so 1 - 0, and ++b is 1 so 1 - 0 + 1, now b-- is 1 so 1 - 0 + 1 + 1 = 3

text.innerHTML = `<p>a is ${a}</p>`;
text.innerHTML += `<p>b is ${b}</p>`;
text.innerHTML += `<p>Result is ${result}</p>`;

// 3. Write a program that takes input a name from user & greet the user.
const username = prompt("Enter your name: ");
text.innerHTML = `Welcome to the site, ${username}.`;

// 5. Write a program to take input a number from user & display it’s multiplication table on your browser.
const number = +prompt("Enter a number to show multiplication table of:");
text.innerHTML = `<p>${number} x 1 = ${number * 1}</p>`;
text.innerHTML += `<p>${number} x 2 = ${number * 2}</p>`;
text.innerHTML += `<p>${number} x 3 = ${number * 3}</p>`;
text.innerHTML += `<p>${number} x 4 = ${number * 4}</p>`;
text.innerHTML += `<p>${number} x 5 = ${number * 5}</p>`;
text.innerHTML += `<p>${number} x 6 = ${number * 6}</p>`;
text.innerHTML += `<p>${number} x 7 = ${number * 7}</p>`;
text.innerHTML += `<p>${number} x 8 = ${number * 8}</p>`;
text.innerHTML += `<p>${number} x 9 = ${number * 9}</p>`;
text.innerHTML += `<p>${number} x 10 = ${number * 10}</p>`;

// 6. Take
    // a) Take three subjects name from user and store them in 3 different variables.
    // b) Total marks for each subject is 100, store it in another variable.
    // c) Take obtained marks for first subject from user and stored it in different variable.
    // d) Take obtained marks for remaining 2 subjects from user and store them in variables.
    // e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
const subject1 = prompt("Enter name of subject 1:"); // a step
const subject2 = prompt("Enter name of subject 2:"); // a step
const subject3 = prompt("Enter name of subject 3:"); // a step

const TOTAL_MARKS_OF_SUB1 = 100; // b step
const TOTAL_MARKS_OF_SUB2 = 100; // b step
const TOTAL_MARKS_OF_SUB3 = 100; // b step

const sub1ObtMarks = +prompt(`Enter marks of ${subject1}:`); // c step

const sub2ObtMarks = +prompt(`Enter marks of ${subject2}:`); // d step
const sub3ObtMarks = +prompt(`Enter marks of ${subject3}:`); // d step

const percentageOfSub1 = (sub1ObtMarks / TOTAL_MARKS_OF_SUB1) * 100; // e step
const percentageOfSub2 = (sub2ObtMarks / TOTAL_MARKS_OF_SUB2) * 100; // e step
const percentageOfSub3 = (sub3ObtMarks / TOTAL_MARKS_OF_SUB3) * 100; // e step

const TOTAL_MARKS_OF_ALL = TOTAL_MARKS_OF_SUB1 + TOTAL_MARKS_OF_SUB2 + TOTAL_MARKS_OF_SUB3; // e step
const totalObtMarks = sub1ObtMarks + sub2ObtMarks + sub3ObtMarks; // e step
const totalPercentage = (totalObtMarks / TOTAL_MARKS_OF_ALL) * 100; // e step

text.innerHTML = `
    <table>
        <tr>
            <th>Subject</th>
            <th>Total Marks</th>
            <th>Obtained Marks</th>
            <th>Percentage</th>
        </tr>
        <tr>
            <td>${subject1}</td>
            <td>${TOTAL_MARKS_OF_SUB1}</td>
            <td>${sub1ObtMarks}</td>
            <td>${percentageOfSub1}%</td>
        </tr>
        <tr>
            <td>${subject2}</td>
            <td>${TOTAL_MARKS_OF_SUB2}</td>
            <td>${sub2ObtMarks}</td>
            <td>${percentageOfSub2}%</td>
        </tr>
        <tr>
            <td>${subject3}</td>
            <td>${TOTAL_MARKS_OF_SUB3}</td>
            <td>${sub3ObtMarks}</td>
            <td>${percentageOfSub3}%</td>
        </tr>
        <tr>
            <td></td>
            <th>${TOTAL_MARKS_OF_ALL}</th>
            <th>${totalObtMarks}</th>
            <th>${totalPercentage}%</th>
        </tr>
    </table>
`;