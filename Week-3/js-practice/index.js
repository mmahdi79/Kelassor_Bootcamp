// practice-1

// let userInput = prompt("Please enter an English phrase: ");

// function countVowels(inputString) {
//     let vowels = 'aeiouAEIOU';
//     let vowelCount = 0;
    
//     for (let i = 0; i < inputString.length; i++) {
//         if (vowels.indexOf(inputString[i]) !== -1) {
//             vowelCount++;
//         }
//     }
    
//     return vowelCount;
// }

// let numberOfVowels = countVowels(userInput);
// console.log("The number of vowels in the entered phrase: " + numberOfVowels);

// -----------------------------------------------------------------------------------------
// practice-2

// let userInput = prompt("Please enter a numeric string: ");

// function powerOfTwoString(inputNumberString) {
//     let result = "";
    
//     for (let i = 0; i < inputNumberString.length; i++) {
//         let digit = parseInt(inputNumberString[i]);
//         let poweredDigit = Math.pow(digit, 2);
//         result += poweredDigit.toString();
//     }
    
//     return result;
// }

// let poweredString = powerOfTwoString(userInput);
// console.log("Numeric string to the power of 2: " + poweredString);

// -----------------------------------------------------------------------------------------
// practice-3

// let numOfStrings = parseInt(prompt("Please enter the number of numeric strings:"));
// let numberStrings = [];

// for (let i = 0; i < numOfStrings; i++) {
//     let numString = prompt("Please enter the numeric string number " + (i + 1) + ":");
//     numberStrings.push(numString);
// }

// function sumPositiveNumbers(numbersArray) {
//     let sum = 0;
    
//     for (let i = 0; i < numbersArray.length; i++) {
//         let number = parseInt(numbersArray[i]);
//         if (!isNaN(number) && number > 0) {
//             sum += number;
//         }
//     }
    
//     return sum;
// }

// let positiveSum = sumPositiveNumbers(numberStrings);
// console.log("Sum of positive numbers: " + positiveSum);

// -----------------------------------------------------------------------------------------
// practice-4

// let userInput = prompt("Please enter a phrase: ");

// function isIsogram(inputString) {
//     let charMap = {};
    
//     for (let i = 0; i < inputString.length; i++) {
//         let char = inputString[i].toLowerCase();
        
//         if (charMap[char]) {
//             return false;
//         }
        
//         charMap[char] = true;
//     }
    
//     return true;
// }

// let isIsogramResult = isIsogram(userInput);
// if (isIsogramResult) {
//     console.log("The entered expression is an Isogram.");
// } else {
//     console.log("The entered expression is not an Isogram.");
// }

// -----------------------------------------------------------------------------------------
// practice-5

// function repeatAndConcat(text, repeat) {
//     let result = "";
    
//     for (let i = 0; i < repeat; i++) {
//         result += text;
//     }
    
//     return result;
// }

// let textInput = prompt("Please enter the phrase: ");
// let repeatInput = parseInt(prompt("Please enter the number of repeat:"));

// let repeatedText = repeatAndConcat(textInput, repeatInput);
// console.log("The result is: " + repeatedText);

// -----------------------------------------------------------------------------------------
// practice-6

// function fibonacciArray(n) {
//     let fibArray = [];
//     let a = 0, b = 1;

//     while (b <= n) {
//         fibArray.push(a);
//         let next = a + b;
//         a = b;
//         b = next;
//     }
    
//     return fibArray;
// }

// let userInput = parseInt(prompt("please enter your number: "));

// let fibResult = fibonacciArray(userInput);
// console.log("Fibonacci sequence up to the entered number: " + fibResult);




