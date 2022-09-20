function missingReindeer(ids) {
  ids = ids.sort((a, b) => {
    return a - b;
  });
  const correctArray = [...Array(ids.length).keys()];
  for (let i = 0; i < ids.length; i++) {
    const element = ids[i];
    if (correctArray[i] !== element) {
      return correctArray[i];
    }
  }
  return ids[ids.length - 1] + 1;
}
console.log(missingReindeer([1])); // -> 0
console.log(missingReindeer([0, 2, 3])); // -> 1
console.log(missingReindeer([5, 6, 1, 2, 3, 7, 0])); // -> 4
console.log(missingReindeer([0, 1])); // -> 2 (¡es el último el que falta!)
console.log(missingReindeer([3, 0, 1])); // -> 2
console.log(missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1])); // -> 8
console.log(missingReindeer([0])); // -> 1 (¡es el último el que falta!) */
