function checkPart(part) {
  let trying = 0;
  const isPolyndrom = (parte, intento) => {
    let reverText = parte.split("").reverse().join("");
    console.log(parte, reverText);
    for (let i = 0; i < reverText.length; i++) {
      const letter = parte[i];
      const letterPalyndrom = reverText[i];
      if (letter !== letterPalyndrom) {
        let arrText = parte.split("");
        console.log(arrText.length - i);
        arrText.splice(arrText.length - i - 1, 1);
        parte = arrText.join("");
        console.log(parte, "nuevooo");
        intento++;
        return intento <= 1 ? isPolyndrom(parte, intento) : false;
      }
    }
    return true;
  };
  return isPolyndrom(part, trying);
}

/* console.log(checkPart("uwu")); // true
// "uwu" es un palíndromo sin eliminar ningún carácter

console.log(checkPart("miidim")); // true
// "miidim" puede ser un palíndromo después de eliminar la primera "i"
// ya que "midim" es un palíndromo

console.log(checkPart("midu")); // false */
// "midu" no puede ser un palíndromo después de eliminar un carácter
console.log(checkPart("zzzoonzzz")); //true
