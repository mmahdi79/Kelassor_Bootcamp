const likeAndDislike = [];
while (true) {
  const sugest = prompt("choose like/dislike (enter quit to exit): ");
  if (sugest.toLowerCase().trim() === "quit") {
    break;
  }
  likeAndDislike.push(sugest);
}

function reasultOfSugest(list) {
  let result = "nothing";
  for (const sug of list) {
    if (sug === "like") {
      if (result === "like") {
        result = "nothing";
      } else {
        result = "like";
      }
    } else if (sug === "dislike") {
      if (result === "dislike") {
        result = "nothing";
      } else {
        result = "dislike";
      }
    } else {
      result = "nothing";
    }
  }
  console.log(result);
}

console.log(likeAndDislike);
reasultOfSugest(likeAndDislike);
