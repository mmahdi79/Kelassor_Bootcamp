// practice-1

// function findNumber(word) {
//   let num = "";
//   for (let i = 0; i < word.length; i++) {
//     if (!isNaN(word[i])) {
//       num += word[i];
//     }
//   }
//   return parseInt(num);
// }

// function sortString(input) {
//   if (!input) return "";
//   splitedString = input.split(" ");
//   sortedStr = splitedString.sort((a, b) => {
//     const numA = findNumber(a);
//     const numB = findNumber(b);
//     return numA - numB;
//   });
//   return sortedStr.join(" ");
// }

// const stringList = prompt("enter your words (contain a number 1-9): ");
// const result = sortString(stringList);
// console.log(result);

// ------------------------------------------------------------------------------------------
// practice-2

// function formatTime(seconds) {
//   if (seconds < 0 || seconds > 359999) {
//     return "Invalid input";
//   }

//   const hours = Math.floor(seconds / 3600);
//   const minutes = Math.floor((seconds % 3600) / 60);
//   const remainingSeconds = seconds % 60;

//   const formattedHours = String(hours).padStart(2, "0");
//   const formattedMinutes = String(minutes).padStart(2, "0");
//   const formattedSeconds = String(remainingSeconds).padStart(2, "0");

//   return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
// }

// const time = prompt("enter your time in second: ");
// console.log(formatTime(time));

// ------------------------------------------------------------------------------------------
// practice-3

