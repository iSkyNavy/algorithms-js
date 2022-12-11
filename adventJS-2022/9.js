function countTime(leds) {
  /* if (!leds.includes(0)) return 0;
  let amount = 0;
  const getTime = (allLeds, acumulate = 0) => {
    acumulate++;
    let arrAcumulateLedsOff = [];
    for (let i = 0; i < allLeds.length; i++) {
      const element = allLeds.at(i);
      const beforeElement = allLeds.at(i - 1);
      if (element === 0 && beforeElement === 1) {
        arrAcumulateLedsOff.push(i);
      }
    }
    arrAcumulateLedsOff.map((e) => {
      allLeds[e] = 1;
    });
    return allLeds.includes(0) ? getTime(allLeds, acumulate) : acumulate;
  };
  amount = getTime(leds, amount);
  const response = amount * 7;
  console.log(response);
  return response; */
  let arr = leds.join("").split("1");
  arr[0] += arr.pop();
  return Math.max(...arr.map((led) => led.length)) * 7;
}
// const leds2 = [0, 1, 1, 0, 1];
//countTime(leds2); // 7
// 7 segundos ya que en el primer cambio
// todas las luces se encendieron
// 0s: [0, 1, 1, 0, 1]
// 7s: [1, 1, 1, 1, 1]

countTime([0, 0, 0, 1]); // 21
// 21 segundos ya que necesita tres cambios:
// 0s: [0, 0, 0, 1]
// 7s: [1, 0, 0, 1]
// 14s: [1, 1, 0, 1]
// 21s: [1, 1, 1, 1]

//countTime([0, 0, 1, 0, 0]); // 28
// 28 segundos ya que necesita cuatro cambios:
// 0s: [0, 0, 1, 0, 0]
// 7s: [0, 0, 1, 1, 0]
// 14s: [0, 0, 1, 1, 1]
// 21s: [1, 0, 1, 1, 1]
// 28s: [1, 1, 1, 1, 1]
