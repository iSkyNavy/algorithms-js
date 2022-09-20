//times => veces que va al cine
//valor de entrada sola => 12
//valor de tarjeta => 250
//PAGAR EL 75% DE LO QUE PAGASTE LA ULTIMA VEZ
//Tarjeta fidelidad: 250$ + (12$ * 0,75) +  (12$ * 0,75 * 0,75) + (12$ * 0,75 * 0,75 * 0,75) = 270,8125$
function shouldBuyFidelity(times) {
  const simpleCost = 12;
  const customCost = 250;
  const percent = 0.75;
  const simplePrice = times * simpleCost;
  let customPrice = customCost;
  for (let index = 1; index <= times; index++) {
    let p = simpleCost * Math.pow(percent, index);
    customPrice = customPrice + p;
  }

  console.log(customPrice);
  if (simplePrice < customPrice) {
    return false;
  }
  return true;
}
console.log(shouldBuyFidelity(100));
