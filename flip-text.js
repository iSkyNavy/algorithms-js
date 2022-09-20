const text = "Hola this is my text";
const arrayWords = text.split(" ");
const countArrayWordsWithPosition = arrayWords.length - 1;
let newText = [];
for (let index = countArrayWordsWithPosition; index >= 0; index--) {
  newText.push(arrayWords[index]);
}

/* const flipText = arrayWords.map((word) => {
  i -= 1;
  if (i == 0) return;
  return word[i];
}); */
console.log(arrayWords);
console.log(newText);
