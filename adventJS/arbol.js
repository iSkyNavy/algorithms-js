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
  /* let arbol = "";
  const arbolObj = {
    asterico: "*",
    barra: "_",
    tronco: "#",
  };
  const { asterico, barra, tronco } = arbolObj;

  for (let i = 1; i <= height; i++) {
    arbol = arbol.concat(
      barra.repeat(height - i),
      asterico.repeat(i + i - 1),
      barra.repeat(height - i),
      "\n"
    );
  }
  arbol = arbol.concat(
    barra.repeat(height - 1),
    tronco,
    barra.repeat(height - 1),
    "\n"
  );
  arbol = arbol.concat(
    barra.repeat(height - 1),
    tronco,
    barra.repeat(height - 1)
  );
  console.log(arbol);
  return arbol; */
}
createXmasTree(15);
