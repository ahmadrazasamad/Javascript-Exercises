const text = document.getElementById("text");
// 1. Declare and initialize an empty multidimensional array.(Array of arrays)
let multiDimensionArr = [[1, 3, 5, 7, 9], [0, 2, 4, 6, 8]];

// 2. Declare and initialize a multidimensional array representing the following matrix:(image given in Questions.pdf)
let matrixArr = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
for (let i = 0; i < matrixArr.length; i++) {
    for (let j = 0; j < matrixArr[i].length; j++)
        text.innerHTML += `${matrixArr[i][j]} `;
    text.innerHTML += "<br/>";
}

// 3. Write a program to print numeric counting from 1 to 10.
text.innerHTML = "";
for (let i = 1; i <= 10; i++)
    text.innerHTML += `${i}<br/>`;

// 4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.
let tableOf = +prompt("Enter a number to print multiplication table of: ");
let lengthOfTable = +prompt("Enter the length of the multiplication table: ");

text.innerHTML = "";
for(let i = 1; i <= lengthOfTable; i++)
    text.innerHTML += `${tableOf} x ${i} = ${tableOf * i}<br/>`;

// 5. Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]
let fruits = ["apple", "banana", "mango", "orange", "stawberry"];
text.innerHTML = "";

for (let i = 0; i < fruits.length; i++)
    text.innerHTML += `${fruits[i]}<br/>`;
text.innerHTML += "<br/>";

for (let i = 0; i < fruits.length; i++)
    text.innerHTML += `Element ar index ${i} is ${fruits[i]}<br/>`;

// 6. Generate the following series in your browser. See example output.
    // a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
    // b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
    // c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
    // d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
    // e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
text.innerHTML = "Counting: ";
for (let i = 0; i <= 15; i++)
    text.innerHTML += `${i}${(i < 15) ? ", " : ""}`;
text.innerHTML += "<br/>";

text.innerHTML += "Reverse Counting: ";
for (let i = 10; i >= 0; i--)
    text.innerHTML += `${i}${(i > 0) ? ", " : ""}`;
text.innerHTML += "<br/>";

text.innerHTML += "Even: ";
for (let i = 0; i <= 20; i = i + 2)
    text.innerHTML += `${i}${(i < 20) ? ", " : ""}`;
text.innerHTML += "<br/>";

text.innerHTML += "Odd: ";
for (let i = 1; i <= 19; i = i + 2)
    text.innerHTML += `${i}${(i < 19) ? ", " : ""}`;
text.innerHTML += "<br/>";

text.innerHTML += "Series: ";
for (let i = 2; i <= 20; i = i + 2)
    text.innerHTML += `${i}k${(i < 20) ? ", " : ""}`;
text.innerHTML += "<br/>";

// 7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example: (images given in Questions.pdf)
let items = ["cake", "apple pie", "cookie", "chips", "patties"];
let toSearch = prompt("Welcome to ABC bakery, What do you want to order sir/ma'am?");

let found = false;
for (let i = 0; i < items.length; i++) {
    if (items[i] === toSearch) {
        found = true;
        text.innerHTML = `${toSearch} is available at index ${i} in our bakery`
        break;
    }
}

if (!found)
    text.innerHTML = `We are sorry, ${toSearch} is not available in out bakery`;

// 8. Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12]
let arr1 = [24, 53, 78, 91, 12];

text.innerText = "Array items: ";
for (let i = 0; i < arr1.length; i++)
    text.innerHTML += `${arr1[i]}${(i < (arr1.length - 1)) ? ", " : ""}`;
text.innerHTML += "<br/>";

let largestNumber = arr1[0];
for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] > largestNumber) {
        largestNumber = arr1[i];
    }
}
text.innerText += `The largest number is ${largestNumber}`;

// 9. Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12]
let arr2 = [24, 53, 78, 91, 12];

text.innerText = "Array items: ";
for (let i = 0; i < arr2.length; i++)
    text.innerHTML += `${arr2[i]}${(i < (arr2.length - 1)) ? ", " : ""}`;
text.innerHTML += "<br/>";

let smallestNumber = arr2[0];
for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] < smallestNumber) {
        smallestNumber = arr2[i];
    }
}
text.innerText += `The smallest number is ${smallestNumber}`;

// 10. Write a program to print multiples of 5 ranging 1 to 100
text.innerHTML = "Multiples of 5(ranging 1-100): ";
for (let i = 1; i <= 20; i++)
    text.innerHTML += `${5 * i}${(i < 20) ? ", " : ""}`;