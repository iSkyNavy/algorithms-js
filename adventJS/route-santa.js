/* trip[0] = número de regalos a transportar
trip[1] = punto de recogida de los regalos
trip[2] = punto de entrega de los regalos */

function canCarry(capacity, trips) {
  let amount = 0;
  const arrTrips = orderTrips(trips);
  for (let i = 0; i < arrTrips.length; i++) {
    const currentTrip = arrTrips[i];
    amount = amount + currentTrip[0];
    if (amount > capacity) return false;
    /* const nextTrip = arrTrips[i + 1];

    if (currentTrip[2] <= nextTrip[2]) {
      amount = amount - currentTrip[0];
    } else {
      amount = amount + nextTrip[0];
      if (amount > capacity) return false;
    } */
  }
  console.log(arrTrips);
}

function orderTrips(arrTrips) {
  for (let i = 1; i < arrTrips.length; i++) {
    for (let j = 0; j < arrTrips.length - i; j++) {
      if (arrTrips[j][1] > arrTrips[j + 1][1]) {
        let currentTrip = arrTrips[j];
        arrTrips[j] = arrTrips[j + 1];
        arrTrips[j + 1] = currentTrip;
      }
    }
  }
  return arrTrips;
}
canCarry(4, [
  [2, 10, 8],
  [3, 6, 10],
  [3, 1, 10],
  [3, 0, 10],
]);
/* canCarry(4, [
  [2, 5, 8],
  [3, 6, 10],
]); // false
// En el punto 5 recoge 2 regalos...
// En el punto 6 recoge 3 regalos...
// Del punto 6 al 8 tendría 5 regalos en total
// Y su capacidad es 4... así que ¡no podría!

canCarry(3, [
  [1, 1, 5],
  [2, 2, 10],
]); // true
// En el punto 1 recoge 1 regalo...
// En el punto 2 recoge 2 regalos...
// En el punto 5 entrega 1 regalo...
// En el punto 10 entrega 2 regalos...
// ¡Sí puede! Nunca superó la carga máxima de 3 regalos

canCarry(3, [
  [2, 1, 5],
  [3, 5, 7],
]); // true -> nunca supera el máximo de capacidad
canCarry(4, [
  [2, 3, 8],
  [2, 5, 7],
]); // true -> del punto 5 al 7 lleva 4 regalos y no supera el máximo

canCarry(1, [[2, 3, 8]]); // false -> no podría ni con el primer viaje
canCarry(2, [
  [1, 2, 4],
  [2, 3, 8],
]); // fal */
