function getMaxNumber(arr) {
  let data = { ind: 0, number: 0 };
  let max = arr[0];
  let indMax = 0;
  for (let i = 1; i <= arr.length; i++) {
    const element = arr[i];
    if (max < element) {
      max = element;
      indMax = i;
    }
  }
  data.ind = indMax;
  data.number = max;
  return data;
}
function checkSledJump(heights) {
  if (heights.length < 3) return false;
  let ind_num = getMaxNumber(heights);
  let lastElement = heights[heights.length - 1];
  let isStrict = true;
  if (lastElement === ind_num.number) return false;
  for (let i = 1; i < heights.length; i++) {
    const last = heights[i - 1];
    const element = heights[i];
    if (i < ind_num.ind) {
      if (last >= element) return false;
    }
    if (i === ind_num.ind) {
      if (element !== ind_num.number) return false;
    }
    if (i > ind_num.ind) {
      if (last <= element) return false;
    }
  }
  return isStrict;
}
console.log(checkSledJump([1, 2, 3, 2, 1])); // true: sube y baja de forma estricta
console.log(checkSledJump([0, 1, 0])); // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 3, 2, 1])); // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 1000, 1])); // -> true: sube y baja de forma estricta
console.log(checkSledJump([2, 4, 4, 6, 2])); // false: no sube de forma estricta
console.log(checkSledJump([1, 2, 3])); // false: sólo sube
console.log(checkSledJump([1, 2, 3, 2, 1, 2, 3])); // false: sube y baja y sube... ¡no vale!
