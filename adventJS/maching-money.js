function getCoins(change) {
  const coins = [1, 2, 5, 10, 20, 50];
  const finalValues = [0, 0, 0, 0, 0, 0];
  for (let i = coins.length - 1; i >= 0 || change > 0; ) {
    // i = 6 =>50
    let newValue = coins[i];
    if (newValue <= change) {
      change = change - newValue;
      console.log(newValue);
      finalValues[i] += 1;
      i = coins.length;
    } else {
      i -= 1;
    }
  }
  return finalValues;
}
/*
coins[0] = 1 céntimo
coins[1] = 2 céntimos
coins[2] = 5 céntimos
coins[3] = 10 céntimos
coins[4] = 20 céntimos
coins[5] = 50 céntimos */
console.log(getCoins(3)); // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
/* getCoins(3); // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
getCoins(5); // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
getCoins(16); // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
getCoins(100); // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos */
