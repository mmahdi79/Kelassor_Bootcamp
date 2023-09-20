// practice-1

// function isValidISBN10(isbn) {
//   // Remove any hyphens or spaces from the input
//   isbn = isbn.replace(/[-\s]/g, "");

//   // Check if the ISBN has exactly 10 characters
//   if (isbn.length !== 10) {
//     return false;
//   }

//   // Calculate the checksum
//   let checksum = 0;
//   for (let i = 0; i < 9; i++) {
//     if (!/^\d$/.test(isbn[i])) {
//       return false; // The first nine characters must be digits
//     }
//     checksum += parseInt(isbn[i], 10) * (i + 1);
//   }

//   // Handle the last character which can be a digit or 'X'
//   const lastChar = isbn[9];
//   if (lastChar === "X") {
//     checksum += 10 * 10;
//   } else if (/^\d$/.test(lastChar)) {
//     checksum += parseInt(lastChar, 10) * 10;
//   } else {
//     return false; // The last character must be a digit or 'X'
//   }

//   // Check if the checksum is divisible by 11
//   return checksum % 11 === 0;
// }

// let ISBN = prompt("enter your numbers: ");
// console.log(isValidISBN10(ISBN));

// ------------------------------------------------------------------------------------------
// practice-2

// function solution(input, markers) {
//   // Split the input string into lines
//   const lines = input.split("\n");

//   // Iterate through each line
//   for (let i = 0; i < lines.length; i++) {
//     const line = lines[i];

//     // Find the position of the first comment marker in the line
//     const markerIndex = markers.reduce((minIndex, marker) => {
//       const index = line.indexOf(marker);
//       return index !== -1 && (minIndex === -1 || index < minIndex)
//         ? index
//         : minIndex;
//     }, -1);

//     // Remove the portion of the line after the comment marker (if found)
//     if (markerIndex !== -1) {
//       lines[i] = line.substring(0, markerIndex).trimRight();
//     }
//   }

//   // Join the modified lines back into a single string
//   return lines.join("\n");
// }

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", [
//   "#",
//   "!",
// ]);
// console.log(result);

// ------------------------------------------------------------------------------------------
// practice-3

// ------------------------------------------------------------------------------------------
// practice-4
