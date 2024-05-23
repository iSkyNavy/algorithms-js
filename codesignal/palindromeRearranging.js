/* 
For inputString = "aabb", the output should be
solution(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome.

aba => impar 2a 1b
abba => par 2a 2b
abccba => par 2a 2b 2c
abcba => impar 2a 2b 1c
abcdcba => impar 2a 2b 2c 1d
*/

/**
 * 
 * @param {string} inputString 
 */

function solution(inputString) {
    const isPar = inputString.length % 2 === 0;
    const arrString = inputString.split('');
    const dictionary = {};
    arrString.map(letter => {
        if (dictionary[letter]) dictionary[letter] = dictionary[letter] + 1;
        else dictionary[letter] = 1;
    })
    const arrValuesFromDictionary = Object.values(dictionary)
    let impars = 0;
    const resp = arrValuesFromDictionary.some(element => {
        if (isPar) return element % 2 !== 0;
        if (!isPar) {
            if (element % 2 !== 0) impars++;
            return impars > 1;
        }
    })
    return !resp;
}

console.log(solution("aabb"));
console.log(solution("aabbc"));
console.log(solution("aabbcd"));
console.log(solution("abcad"));