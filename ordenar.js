const numbers = [1, 200, 142, 4, 9, 1, 10, 1, 1];

/**
 * 
 * @param {Array} numbers 
 */
function getOrderNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length - 1; j++) {
            if (numbers[j] > numbers[j + 1]) {
                const temporal = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temporal;
            }
        }
    }
    return numbers;
}

console.log(getOrderNumbers(numbers));