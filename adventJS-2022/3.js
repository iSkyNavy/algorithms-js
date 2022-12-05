// cada regalo dentro de la caja tiene un peso que es igual al número de letras en el nombre del regalo.
// El límite de peso máximo de cada reno es igual a dos veces el número de letras en su nombre.

function distributeGifts(packOfGifts, reindeers) {
  let counterWeightGifts = 0;
  let counterWeightReindeers = 0;

  packOfGifts.map((gift) => {
    let counterNameWords = gift.length;
    counterWeightGifts = counterWeightGifts + counterNameWords;
  });

  reindeers.map((reindeer) => {
    let counterNameWords = reindeer.length;
    let formatAccumulate = 2 * counterNameWords;
    counterWeightReindeers = counterWeightReindeers + formatAccumulate;
  });
  const res = Math.floor(counterWeightReindeers / counterWeightGifts);
  console.log(res);
  return res;
}

const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

// distributeGifts(packOfGifts, reindeers); // 2
distributeGifts(
  ["music"],
  [
    "midudev",
    "pheralb",
    "codingwithdani",
    "carlosble",
    "blasco",
    "facundocapua",
    "madeval",
    "memxd",
  ]
);
