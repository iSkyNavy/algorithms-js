function createXmasTree(height) {
  if (height < 1 || height > 100) return "Error";
  const mostNumber = height * 2 - 1;
  let rama = "";
  for (let i = height, k = 1; i > 0, k <= height; i--, k++) {
    let max = 2 * k - 1;
    for (let j = 1; j <= mostNumber; j++) {
      if (j >= i && j < i + max) {
        rama = rama.concat("*");
      } else {
        rama = rama.concat("_");
      }
    }
    rama = rama.concat("\n");
  }
  rama = rama.concat("_".repeat(height - 1), "#", "_".repeat(height - 1), "\n");
  rama = rama.concat("_".repeat(height - 1), "#", "_".repeat(height - 1), "\n");
  console.log(rama);
  return rama;
}
createXmasTree(15);
