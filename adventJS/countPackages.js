function r(carriers, carrierID, mount) {
  for (let i = 0; i < carriers.length; i++) {
    const element = carriers[i];
    if (element[0] === carrierID) {
      console.log(element[0]);
      mount = mount + element[1];
      console.log(mount);
      const subs = element[2];
      if (subs.length !== 0) {
        for (let j = 0; j < subs.length; j++) {
          mount = r(carriers, subs[j], mount);
        }
      } else {
        return mount;
      }
    }
  }
  return mount;
}

function countPackages(carriers, carrierID) {
  let count = 0;
  return r(carriers, carrierID, count);
}
const options = [
  ["dapelu", 5, ["midu", "jelowing"]],
  ["midu", 2, []],
  ["jelowing", 2, []],
];

console.log(countPackages(options, "dapelu")); // 9
// 5 de dapelu, 2 de midu y 2 de jelowing = 9
/* function countPackages(carriers, carrierID) {
  for (let i = 0; i < carriers.length; i++) {
    const element = carriers[i];
    if (element[0] === carrierID) {
      //   console.log(element[0]);
      count = count + element[1];
      //   console.log(count);
      const subs = element[2];
      if (subs.length !== 0) {
        for (let j = 0; j < subs.length; j++) {
          countPackages(carriers, subs[j]);
        }
      } else {
          return;
      }
    }
  }
  return count;
} */

const carriers2 = [
  ["lolivier", 8, ["camila", "jesuspoleo"]],
  ["camila", 5, ["sergiomartinez", "conchaasensio"]],
  ["jesuspoleo", 4, []],
  ["sergiomartinez", 4, []],
  ["conchaasensio", 3, ["facundocapua", "faviola"]],
  ["facundocapua", 2, []],
  ["faviola", 1, []],
];

console.log(countPackages(carriers2, "camila")); // 15
// 5 de camila, 4 de sergiomartinez, 3 de conchaasensio, 2 de facundocapua y 1 de faviola = 15
