/* 
Write a function that reverses characters in (possibly nested) parentheses in the input string.

Input strings will always be well-formed with matching ()s.

For inputString = "(bar)", the output should be
solution(inputString) = "rab";
For inputString = "foo(bar)baz", the output should be
solution(inputString) = "foorabbaz";
For inputString = "foo(bar)baz(blim)", the output should be
solution(inputString) = "foorabbazmilb";
For inputString = "foo(bar(baz))blim", the output should be
solution(inputString) = "foobazrabblim".
*/

// (adada(as)as(aas))
/**
 * 
 * @param {string} inputString 
 */
function solution(inputString) {
    const lastOpenCharacterIndex = inputString.lastIndexOf('(');
    const firstCloseCharacterIndex = inputString.indexOf(')', lastOpenCharacterIndex);
    if (lastOpenCharacterIndex < 0 || firstCloseCharacterIndex < 0) return inputString;
    let wordToReplace = inputString.slice(lastOpenCharacterIndex, firstCloseCharacterIndex + 1);
    let wordToReplaceReverse = wordToReplace.replace(/\(|\)/g, '').split('').reverse().join('');
    inputString = inputString.replace(wordToReplace, wordToReplaceReverse);
    if (inputString.includes('(') && inputString.includes(')')) return solution(inputString);
    console.log(lastOpenCharacterIndex, firstCloseCharacterIndex, wordToReplace, wordToReplaceReverse);
    return inputString;
}

console.log(solution('(hola)'));
console.log(solution('(hola4w4'));
console.log(solution('(ho(la)4w4)'));
console.log(solution('(ho(la)4w4d(faf)asf)'));