function decodeNumbers(symbols) {
  const values = { ".": 1, ",": 5, ":": 10, ";": 50, "!": 100 };
  const arrSymbols = symbols.split("");
  let finalValue = 0;
  for (let i = 0; i < arrSymbols.length; i++) {
    const element = arrSymbols[i];
    const nextElement = arrSymbols[i + 1];
    if (!values[element]) return NaN;
    const valueElement = values[element];
    const valueNextElement = values[nextElement];
    if (valueElement < valueNextElement) {
      finalValue = finalValue - valueElement;
    } else {
      finalValue = finalValue + valueElement;
    }
  }
  return finalValue;
}
console.log(decodeNumbers("...")); // 3
console.log(decodeNumbers(".,")); // 4 (5 - 1)
console.log(decodeNumbers(",.")); // 6 (5 + 1)
console.log(decodeNumbers(",...")); // 8 (5 + 3)
console.log(decodeNumbers(".........!")); // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
console.log(decodeNumbers(".;")); // 49 (50 - 1)
console.log(decodeNumbers("..,")); // 5 (-1 + 1 + 5)
console.log(decodeNumbers("..,!")); // 95 (1 - 1 - 5 + 100)
console.log(decodeNumbers(".;!")); // 49 (-1 -50 + 100)
console.log(decodeNumbers("!!!")); // 300
console.log(decodeNumbers(";!")); // 50
console.log(decodeNumbers(";.W")); // NaN
