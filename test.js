const numbers = [1, 200, 3, 6, 8, 0, 125, 5, 11, 5, 11];

/**
 * 
 * @param {Array<number>} numbers 
 * @returns 
 */
const orderNumbers = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length - 1; j++) {
            if (numbers[j] < numbers[j + 1]) {
                const temporal = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temporal;
            }
        }

    }
    return numbers;
}

// console.log(orderNumbers(numbers))

/**
 * 
 * @param {Array<number>} numbers 
 * @returns 
 */
const findMaxNumber = (numbers) => {
    /* console.log(numbers);
    return Math.max(...numbers); */
    let mayor = numbers[0];
    for (let i = 1; i < numbers.length - 1; i++) {
        if (numbers[i] > mayor) {
            mayor = numbers[i];
        }
    }
    return mayor;
}

//console.log(findMaxNumber(numbers))

/**
 * 
 * @param {string | number} data 
 * @returns 
 */
const isCapicua = (data) => {
    const typeofData = typeof data;
    if (typeofData === 'string') {
        data = data.replace(/\s/g, '');
        let reverse = data.split('').reverse().join('');
        return data === reverse;
    }
    if (typeofData === 'number') {
        let reverse = String(data).split('').reverse().join('');
        return data == reverse;
    }
}

// console.log(isCapicua(' as s a'));
/**
 * 
 * @param {Array} arr 
 */
const ammountRepeat = (arr) => {
    const dictionary = {};
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (dictionary[element]) {
            dictionary[element] = dictionary[element] + 1
        } else {
            dictionary[element] = 1
        }
    }
    let numeroMasRepetido = 0;
    let frequencia = 0;
    for (const iterator in dictionary) {
        if (dictionary[iterator] > frequencia) {
            numeroMasRepetido = iterator;
            frequencia = dictionary[iterator]
        }
    }
    return numeroMasRepetido;
}

//console.log(ammountRepeat([200, 1, 2, 5, 1, 200, 1, 200, 201, 200, 2, 1, 1]));

/**
 * @param {number} money
 */

const getChangeOfMoney = (money) => {
    const typeChange = [1, 5, 10, 100];
    const preferenceChange = typeChange.reverse();
    let moneyInteger = parseInt(money);
    const decimal = (money - moneyInteger);
    let moneyChanged = {};
    for (let i = 0; i < preferenceChange.length, moneyInteger > 0; i++) {
        const element = preferenceChange[i];
        if (moneyInteger >= element) {
            const cantidad = moneyInteger / element;
            moneyChanged[element] = parseInt(cantidad);
            moneyInteger = moneyInteger % element;
        }
    }
    if (decimal > 0) moneyChanged["decimal"] = decimal.toFixed(2);
    return moneyChanged;
}

/* console.log(getChangeOfMoney(356.58));
console.log(getChangeOfMoney(5000000));
console.log(getChangeOfMoney(34)); */

/**
 * 
 * @param {Array} data 
 */

const deleteRepeat = (data) => {
    const dataWithoutRepeat = [];
    const frecuency = {};
    for (const iterator of data) {
        if (!frecuency[iterator]) {
            frecuency[iterator] = 1;
            dataWithoutRepeat.push(iterator)
        }
    }
    return dataWithoutRepeat;
}
// console.log(deleteRepeat([34, 34, 36, 1, 2, 14, 1]));

/**
 * 
 * @param {Array} data 
 */
const convertTheArrWithoutRepeat = (data) => {
    const dataWithoutRepeat = data.filter((item, index) => data.indexOf(item) === index)
    return dataWithoutRepeat;
}

// console.log(convertTheArrWithoutRepeat([34, 34, 36, 1, 2, 14, 1]));

const deleteRepeatWithIncludes = (data) => {
    const dataWithoutRepeat = [];
    for (const element of data) {
        if (!dataWithoutRepeat.includes(element)) {
            dataWithoutRepeat.push(element)
        }
    }
    return dataWithoutRepeat;
}

// console.log(deleteRepeatWithIncludes([34, 34, 36, 1, 2, 14, 1]));

/**
 * 
 * @param {Array} data 
 */

const getAny = (number) => {
    let result = 1;
    for (let index = 1; index <= number; index++) {
        result = result * index;
    }
    return result;
}

// console.log(getAny(15));

/**
 * 
 * @param {Array} number 
 */
const isPar = (number) => {
    return number % 2 === 0;
}

// console.log(isPar(789798798764544));

const isInpar = (number) => {
    return number % 2 !== 0;
}


const isParOrImpar = (number, validate) => {
    const compare = `${validate === 'par' ? number % 2 === 0 : number % 2 !== 0}`;
    return eval(compare)
}

// console.log(isParOrImpar(151, 'par'))

const isPrimo = (number) => {
    for (let index = 2; index < number; index++) {
        if (number % index === 0) return false
    }
    return true;
}

const getMultiplos = (number) => {
    const multiplos = [1, number];
    for (let i = 2; i < number; i++) {
        if (number % i === 0) multiplos.push(i);
    }
    return multiplos;
};

console.log(getMultiplos(100));

