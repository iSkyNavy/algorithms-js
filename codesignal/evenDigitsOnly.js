/**
 * 
 * @param {Number} n 
 * @returns 
 */

function solution(n) {
    /* const arrNumbers = n.toString().split('');
    console.log(arrNumbers) */
    return n.toString().split('').every(number => parseInt(number) % 2 === 0)
}

console.log(solution(248622));