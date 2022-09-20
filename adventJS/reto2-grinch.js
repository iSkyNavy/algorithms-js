const carta = "bici coche balón _playstation bici coche peluche";
const regex = /^.*\_{1}.*\S*$/;
function getGifts(carta) {
  const letter2 = carta.trim();
  const arrayGifts = letter2.split(" ");
  let finalGifts = {};
  for (let index = 0; index < arrayGifts.length; index++) {
    const gift = arrayGifts[index];
    let countSameGifts = arrayGifts.filter((gft) => gft === gift);
    if (!regex.test(gift)) {
      finalGifts[gift] = countSameGifts.length;
    }
  }
  console.log(finalGifts);
  return finalGifts;
}

getGifts(carta);
