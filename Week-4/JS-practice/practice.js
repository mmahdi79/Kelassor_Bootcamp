// practice-1

// const string = prompt("enter your string: ");

// function removeVowels(inputString) {
//   const vowels = ["a", "e", "i", "u", "o", "A", "E", "I", "U", "O"];
//   const charList = inputString.split("");
//   const result = charList.filter((char) => !vowels.includes(char)).join("");

//   return result;
// }
// console.log(removeVowels(string));

// ------------------------------------------------------------------------------
// practice-2

// const nameList = [];
// while (true) {
//   const name = prompt("enter your names (enter quit to exit): ");
//   if (name.toLowerCase().trim() === "quit") {
//     break;
//   }
//   nameList.push(name);
// }

// function action(arrayOfName) {
//   if (arrayOfName.length === 0) {
//     return "Nobody likes this.";
//   } else if (arrayOfName.length === 1) {
//     return `${arrayOfName[0]} likes this.`;
//   } else if (arrayOfName.length === 2) {
//     return `${arrayOfName[0]} and ${arrayOfName[1]} like this.`;
//   } else {
//     const lastPerson = arrayOfName.pop();
//     const otherPeople = arrayOfName.join(", ");
//     return `${otherPeople} and ${lastPerson} like this.`;
//   }
// }

// console.log(action(nameList));

// ------------------------------------------------------------------------------
// practice-3

// const list1 = [];
// const list2 = [];

// while (true) {
//   const number = prompt("enter your numbers (enter quit to exit): ");
//   if (number.toLowerCase().trim() === "quit") {
//     break;
//   }
//   list1.push(+number);
// }

// while (true) {
//   const number = prompt("enter your numbers (enter quit to exit): ");
//   if (number.toLowerCase().trim() === "quit") {
//     break;
//   }
//   list2.push(+number);
// }

// function differences(array1, array2) {
//   const differentNumbers1 = array1
//     .map((value) => {
//       if (!array2.includes(value)) {
//         return value;
//       }
//     })
//     .filter(Boolean);
//   const differentNumbers2 = array2
//     .map((value) => {
//       if (!array1.includes(value)) {
//         return value;
//       }
//     })
//     .filter(Boolean);

//   return `${differentNumbers1},${differentNumbers2}`;
// }

// console.log(differences(list1, list2));

// ------------------------------------------------------------------------------
// practice-4

// const letter = prompt("enter your letters: ");

// function counter(letterStr) {
//   letterStr = letterStr.toLowerCase();
//   const copiedLetterStr = [...letterStr];
//   const duplicateList = [];
//   for (const word1 of letterStr) {
//     let duplicateCounter = 0;
//     for (const word2 of copiedLetterStr) {
//       if (word1 === word2) {
//         duplicateCounter += 1;
//       }
//     }
//     if (duplicateCounter > 1 && !duplicateList.includes(word1)) {
//       duplicateList.push(word1, duplicateCounter);
//     }
//   }
//   return duplicateList;
// }

// const result = counter(letter);
// if (result.length == 0) {
//   console.log("0 # no characters repeats more than once");
// } else {
//   for (let repeat = 0; repeat < result.length; repeat++) {
//     console.log(
//       `'${result.at(repeat * 2)}' repeat: ${result.at(repeat * 2 + 1)}`
//     );
//   }
// }
