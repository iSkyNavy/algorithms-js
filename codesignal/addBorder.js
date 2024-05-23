/**
 * picture = ["abc",
           "ded"]
solution(picture) = ["*****",
                    "*abc*",
                    "*ded*",
                    "*****"]
 * @param {Array<string>} a 
 */

function solution(a) {
    const arr = ['*'.repeat(a[0].length + 2)];
    a.map((letter, i) => {
        arr.push(`*` + letter + '*');
    })
    arr.push('*'.repeat(a[1].length + 2))
    return arr;
}

console.log(solution(['abc', 'dbv']))

console.log(solution(['a']))