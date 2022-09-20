function pangram(letter) {
  const acentos = { á: "a", é: "e", í: "i", ó: "o", ú: "u" };
  const abc = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    ñ: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  };
  let fixedLetters = letter.toLowerCase();
  fixedLetters = fixedLetters.replace(/(\,|\.|\!|\¡|\:|\s)+/g, "");
  fixedLetters = fixedLetters
    .split("")
    .map((l) => acentos[l] || l)
    .join("")
    .toString();
  const arrLetters = fixedLetters.split("");
  arrLetters.forEach((element) => {
    abc[element] += 1;
  });
  const valuesObject = Object.values(abc);

  if (valuesObject.includes(0)) return false;
  return true;
  // return false;
}
console.log(pangram("Éxtraño pan de col y kiwi se quemó bajo fugaz vaho")); // true
console.log(
  pangram("Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!")
); // true
console.log(
  pangram(
    "Esto es una frase larga pero no tiene todas las letras del abecedario"
  )
); // false
console.log(pangram("De la a a la z, nos faltan letras")); // false
