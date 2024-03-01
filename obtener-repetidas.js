const arr = ["a", "c", "p", "a", ",p¿", "f", "p"];

const getLettersAndCountRepeat = (arr) => {
    let dictionary = {}
    for (let i = 0; i < arr.length; i++) {
        let letter = arr[i];
        letter = sanitizeArr(letter);
        if (dictionary[letter]) dictionary[letter] = dictionary[letter] + 1;
        else dictionary[letter] = 1;
    }
    return dictionary;
}

/**
 * 
 * @param {String} letter 
 */
const sanitizeArr = (letter) => {
    letter = letter.replace(/[,/?¿]/g, "")
    return letter;
}

console.log(getLettersAndCountRepeat(arr));