const arr1 = [510, 2, 412, 900, 45];

/**
 * 
 * @param {Array} arr 
 */
const calculateSumMinMax = (arr) => {
    /* const min = Math.min(...arr);
    const max = Math.max(...arr)
    console.log(min, max);
    return min + max; */
    const lenght = arr.length;

    for (let i = 0; i < lenght; i++) {
        for (let j = 0; j - i - 1 < lenght; j++) {
            if (arr[j] < arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }

    }
    return arr[0] + arr[lenght - 1];
}


console.log(calculateSumMinMax(arr1));