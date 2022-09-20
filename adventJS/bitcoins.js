function maxProfit(prices) {
  /* let arrCompra = prices.slice(0, 2);
  let valorCompra = Math.min(...arrCompra);
  let arrVenta = prices.slice(2, prices.length);
  let valorVenta = Math.max(...arrVenta);
  if (valorVenta <= valorCompra) return -1;
  console.log(arrCompra, valorCompra, arrVenta, valorVenta);
  return [valorCompra, valorVenta].reduceRight((acc, current) => acc - current); */
  let nextIndex = 0;
  const allProfit = prices.reduce((result, price, index) => {
    console.log(prices.slice(index), "PRICESSSS");
    if (index < nextIndex) {
      return result;
    }
    const foundLastIndex = prices.slice(index).findIndex((p) => p < price);
    console.log(foundLastIndex);
    nextIndex = foundLastIndex === -1 ? prices.length : foundLastIndex;
    console.log(nextIndex, "next");

    const rest = prices.slice(index + 1, nextIndex);
    const min = price;
    const max = rest.length > 0 ? Math.max(...rest) : price;
    const profit = max - min;
    return profit > 0 ? [...result, profit] : result;
  }, []);
  return allProfit.length > 0 ? Math.max(...allProfit) : -1;
}

const pricesBtc = [39, 18, 25, 34, 32, 5];
console.log(maxProfit(pricesBtc)); // -> 16 (compra a 18, vende a 34)

/* const pricesEth = [10, 20, 30, 40, 50, 60, 70];
maxProfit(pricesEth); // -> 60 (compra a 10, vende a 70)

const pricesDoge = [18, 15, 12, 11, 9, 7];
maxProfit(pricesDoge); // -> -1 (no hay ganancia posible)

const pricesAda = [3, 3, 3, 3, 3];
maxProfit(pricesAda); //-> -1 (no hay ganancia posible) */
