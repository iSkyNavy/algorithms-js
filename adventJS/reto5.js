const arrNumbers = [3, 5, 7, 2]; // [3, 7]
/* sumPairs([-3, -2, 7, -5], 10); // null
sumPairs([2, 2, 3, 1], 4); // [2, 2]
sumPairs([6, 7, 1, 2], 8); // [6, 2]
sumPairs([0, 2, 2, 3, -1, 1, 5], 6); // [1, 5] */

function get(numbers, result) {
  let res = [];
  for (let index = 0; index < numbers.length; index++) {
    let arr = [...numbers];
    arr.splice(index, 1);
    let currentNumber = numbers[index];
    let complement = arr.filter((a) => {
      return a + currentNumber == result;
    })[0];
    if (complement && res.length != 2) res.push(currentNumber, complement);
  }
  if (res.length == 0) return null;
  return res;
}
get(arrNumbers, 10);
