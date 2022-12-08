function fitsInOneBox(boxes) {
  let sortBoxes = boxes.sort((a, b) => {
    if (a.l > b.l && a.w > b.w && a.h > b.h) {
      return 1;
    }
    if (a.l < b.l && a.w < b.w && a.h < b.h) {
      return -1;
    }
    return 0;
  });

  return sortBoxes.every((box, index) => {
    if (index === 0) return true;
    const prev = boxes[index - 1];
    return box.l > prev.l && box.w > prev.w && box.h > prev.h;
  });
}

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 },
];
const boxes1 = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
];
/* const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 },
]; */
fitsInOneBox(boxes); // true
