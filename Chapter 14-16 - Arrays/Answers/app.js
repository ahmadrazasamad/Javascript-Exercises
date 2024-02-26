const text = document.getElementById("text");
// 1. Declare an empty array using JS literal notation to store student names in future.
let studentNames = [];

// 2. Declare an empty array using JS object notation to store student names in future.
let stdntNames = new Array(); // constructors called with the new keyword is actually making of an object

// 3. Declare and initialize a strings array.
let stringsArray = ["str 0", "str 1", "str 2"];

// 4. Declare and initialize a numbers array.
let numbersArray = [0, 1, 2];

// 5. Declare and initialize a boolean array.
let booleanArray = [false, true, true];

// 6. Declare and initialize a mixed array.
let mixedArray = ["str 0", 1, true];

// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:(given in Questions.pdf)
let availEduQualitfications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
/*<p>${availEduQualitfications[0]}</p>
    <p>${availEduQualitfications[1]}</p>
    <p>${availEduQualitfications[2]}</p>
    <p>${availEduQualitfications[3]}</p>
    <p>${availEduQualitfications[4]}</p>
    <p>${availEduQualitfications[5]}</p>
    <p>${availEduQualitfications[6]}</p>
    <p>${availEduQualitfications[7]}</p> */ // long method to print each index
text.innerHTML = `<h1>Qualifications</h1>
    <p>${availEduQualitfications.join("<br />")}</p>
`; // short method

// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:(given in Questions.pdf)
let stdntsNames = ["Owais", "Tahib", "Ahmad"];
let stdntsScores = [415, 385, 315];
let totalMarks = 500;

text.innerHTML = `
    <p>Score of ${stdntsNames[0]} is ${stdntsScores[0]}. Percentage: ${(stdntsScores[0] / totalMarks) * 100}%</p>
    <p>Score of ${stdntsNames[1]} is ${stdntsScores[1]}. Percentage: ${(stdntsScores[1] / totalMarks) * 100}%</p>
    <p>Score of ${stdntsNames[2]} is ${stdntsScores[2]}. Percentage: ${(stdntsScores[2] / totalMarks) * 100}%</p>
`;

// 9. Initialize an array with color names. Display the array elements in your browser.
    // a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.
    // b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
    // c. Add two more color to the beginning of the array. Display the updated array in your browser.
    // d. Delete the first color in the array. Display the updated array in your browser.
    // e. Delete the last color in the array. Display the updated array in your browser.
    // f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. Display the updated array in your browser.
    // g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser
let colors = ["Red", "Blue", "Green"];
text.innerHTML = `<p>${colors.join("<br/>")}</p>`;

setTimeout(() => { // added time pauses here for proper flow of program
    let color1 = prompt("What color you want to add to the beginning:"); // a
    colors.unshift(color1);
    text.innerHTML = `<p>${colors.join("<br/>")}</p>`;

    setTimeout(() => {
        let color2 = prompt("What color you want to add to the end:"); // b
        colors.push(color2);
        text.innerHTML = `<p>${colors.join("<br/>")}</p>`;

        setTimeout(() => {
            let color3 = prompt("What other color you want to add to the beginning:"); // c
            let color4 = prompt("What other color you want to add to the beginning:");
            colors.unshift(color3);
            colors.unshift(color4);
            text.innerHTML = `<p>${colors.join("<br/>")}</p>`;

            setTimeout(() => {
                colors.shift(); // d
                text.innerHTML = `<p>${colors.join("<br/>")}</p>`;

                setTimeout(() => {
                    colors.pop(); // e
                    text.innerHTML = `<p>${colors.join("<br/>")}</p>`;

                    setTimeout(() => {
                        let colorToAdd = prompt("Enter a color to add in the array:"); // f
                        let indexToAdd = +prompt("At which index do you want to add a color:");
                        colors.splice(indexToAdd, 0, colorToAdd);
                        text.innerHTML = `<p>${colors.join("<br/>")}</p>`;

                        setTimeout(() => {
                            let indexToDelete = +prompt("At which index do you want to delete a color:"); // g
                            let howManyColors = +prompt("How many colors do you want to delete:");
                            colors.splice(indexToDelete, howManyColors);
                            text.innerHTML = `<p>${colors.join("<br/>")}</p>`;
                        }, 3000)
                    }, 3000);
                }, 3000);
            }, 3000);
        }, 3000);
    }, 3000);
}, 3000);

// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
let studentMarks = [89, 65, 81, 76, 45, 91, 77, 75, 80, 88];
text.innerHTML = `<p>Scores of students</p>
<p>${studentMarks.join("<br/>")}</p>`;

studentMarks.sort();

text.innerHTML += `<p>After sorting</p>
<p>${studentMarks.join("<br/>")}</p>`;

// 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
let cityNames = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshwar"];
text.innerHTML = `<p>Cities List:<p>
    <p>${cityNames.join(",")}</p>`;

let selectedCities = cityNames.slice(2);

text.innerHTML += `<p>Selected cities List:<p>
    <p>${selectedCities.join(",")}</p>`;

// 12. Write a program to create a single string from the below mentioned array:
    // var arr = [“This ”, “ is ”, “ my ”, “ cat”];
let arr = ["This", "is", "my", "cat"];
text.innerHTML = `<p>Array:</p>
    <p>${arr}</p>`;

let str = arr.join(' ');
text.innerHTML += `<p>String</p>
    <p>${str}</p>`;

// 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)
let ioDevices = [];
ioDevices.push("Keyboard");
ioDevices.push("Mouse");
ioDevices.push("Printer");
ioDevices.push("Monitor");

text.innerHTML = `<p>Devices</p>
    <p>${ioDevices.join(", ")}</p><br/>
`;

text.innerHTML += `<p>Out:</p>
    <p>${ioDevices.shift()}</p>
    <p>Out:</p>
    <p>${ioDevices.shift()}</p>
    <p>Out:</p>
    <p>${ioDevices.shift()}</p>
    <p>Out:</p>
    <p>${ioDevices.shift()}</p>
`;

// 14. Create a new array. Store values one by one in such a waythat you can access the values in reverse order. (Last In-First Out)
let devices = [];
devices.push("Keyboard");
devices.push("Mouse");
devices.push("Printer");
devices.push("Monitor");

text.innerHTML = `<p>Devices</p>
    <p>${ioDevices.join(", ")}</p><br/>
`;

text.innerHTML += `<p>Out:</p>
    <p>${ioDevices.pop()}</p>
    <p>Out:</p>
    <p>${ioDevices.pop()}</p>
    <p>Out:</p>
    <p>${ioDevices.pop()}</p>
    <p>Out:</p>
    <p>${ioDevices.pop()}</p>
`;

// 15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method
let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write(`<select name="phone-manufacturers">
    <option hidden>Choose a phone</option>
    <option value="apple">${phoneManufacturers[0]}</option>
    <option value="samsung">${phoneManufacturers[1]}</option>
    <option value="motorola">${phoneManufacturers[2]}</option>
    <option value="nokia">${phoneManufacturers[3]}</option>
    <option value="sony">${phoneManufacturers[4]}</option>
    <option value="haier">${phoneManufacturers[5]}</option>
</select>
`);