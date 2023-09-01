const numbers = prompt("enter the numbers: ");

function descendingOrder(num) {
  const numStr = num.toString();

  const sortedStr = numStr
    .split("")
    .sort((a, b) => b - a)
    .join("");

  const result = parseInt(sortedStr, 10);

  return result;
}

console.log(descendingOrder(numbers));
