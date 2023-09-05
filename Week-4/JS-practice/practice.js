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
//   const differentNumbers = array1
//     .map((value) => {
//       if (!array2.includes(value)) {
//         return value;
//       }
//     })
//     .filter(Boolean);
//   return differentNumbers;
// }

// console.log(differences(list1, list2));

// ------------------------------------------------------------------------------
// practice-4

// نتونستم این تمرین رو حل کنم😅
