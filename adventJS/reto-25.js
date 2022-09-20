function canMouseEat(direction, game) {
  let positionRat = null;
  let indexPositionRat = null;
  let positionCom = null;
  let indexPositionCom = null;
  let i = -1;
  game.map((row) => {
    i++;
    if (row.includes("m")) {
      positionRat = i;
      indexPositionRat = row.indexOf("m");
    }
    if (row.includes("*")) {
      positionCom = i;
      indexPositionCom = row.indexOf("*");
    }
  });

  return [
    [positionRat, indexPositionRat],
    [positionCom, indexPositionCom],
  ];
}
const room = [
  ["a", "a", "a"],
  ["a", "a", "m"],
  ["a", "a", "*"],
];

console.log(canMouseEat("up", room)); // false
/* canMouseEat("down", room); // true
canMouseEat("right", room); // false
canMouseEat("left", room); // false */

/* const room2 = [
  ["*", " ", " ", " "],
  [" ", "m", "*", " "],
  [" ", " ", " ", " "],
  [" ", " ", " ", "*"],
];

canMouseEat("up", room2); // false
canMouseEat("down", room2); // false
canMouseEat("right", room2); // true
canMouseEat("left", room2); // false */
