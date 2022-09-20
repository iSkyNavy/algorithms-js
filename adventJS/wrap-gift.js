function wrapGifts(gifts) {
  /* const longitud = gifts.length;
  let wrapedGift = [];
  if (longitud === 0) return wrapedGift;
  for (let i = 0; i < longitud; i++) {
    const element = gifts[i];
    const countElement = Array.from(element.trim()).length;
    console.log(countElement, element);
    let floor = "*" + "*".repeat(countElement * 2) + "*";
    i === 0 && wrapedGift.push(floor);
    const build = "*" + element + "*";
    wrapedGift.push(build);
    i === longitud - 1 && wrapedGift.push(floor);
  }
  return wrapedGift; */
  if (gifts.length === 0) return [];
  const wrap = gifts.map((regalo) => `*${regalo}*`);
  const len = gifts[1].length;
  const enclose = "*".repeat(len + 2);
  return [enclose, ...wrap, enclose];
}
console.log(wrapGifts(["😊", "🦣"]));
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

console.log(wrapGifts(["🏈🎸", "🎮🧸"]));
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

// wrapGifts(["📷"]);
/* Resultado:
[ '****',
  '*📷*',
  '****'
] */
