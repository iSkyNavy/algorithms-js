function wrapping(gifts) {
  let giftsWrapend = [];
  const character = "*";
  for (const gift of gifts) {
    console.log(gift);
    let countLetters = gift.length;
    let numberCharacters = countLetters + 2;
    let characterRepeted = character.repeat(numberCharacters);
    let giftEnvolded =
      characterRepeted + "\n*" + gift + "*\n" + characterRepeted;
    giftsWrapend.push(JSON.stringify(giftEnvolded));
  }
  //   console.log(JSON.stringify(giftsWrapend));
  return JSON.stringify(giftsWrapend);
}
const gifts = ["book", "game", "socks"];
const wrapped = wrapping(gifts);
console.log(wrapped);
/* [
     "******\n*book*\n******",
     "******\n*game*\n******",
     "*******\n*socks*\n*******"
   ] */
