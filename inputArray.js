const N = 5;
const K = 4;
const inputArray = [1, 1, 2, 8, 16];

if (K % 2 != 0 || N != inputArray.length) {
  console.log("Hay un problema");
}
const newArray = [];
for (let index = 0; index < inputArray.length; index++) {
  let currentElement = inputArray[index];
  let nextElement = inputArray[index + 1];
  if (currentElement == nextElement) {
    newArray.push(currentElement + nextElement);
    index += 2;
  } else {
    newArray.push(currentElement);
  }
}
console.log(newArray);
if (newArray.includes(K)) {
  return console.log("YES");
}
return console.log("NO");
