function getMaxGifts(giftsCities, maxGifts, maxCities) {
  const sortedGiftsCities = giftsCities.sort((a, b) => a - b).reverse();
  console.log(sortedGiftsCities);
  let acumulate = maxGifts;
  let arrCities = [];
  for (let i = 0; i < giftsCities.length; i++) {
    const element = giftsCities[i];
    if (element <= acumulate) {
      arrCities.push(element);
      acumulate = acumulate - element;
    }
    if (arrCities.length >= maxCities) {
      break;
    }
  }
  console.log(arrCities);
  return 0;
}
const giftsCities = [12, 3, 11, 5, 7];
const maxGifts = 20;
const maxCities = 3;
getMaxGifts(giftsCities, maxGifts, maxCities); // 20
