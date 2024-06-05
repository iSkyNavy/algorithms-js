/* 
Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

Example

For inputArray = [2, 4, 1, 0], the output should be
solution(inputArray) = 3.
*/
/**
 * 
 * @param {Array<number>} inputArray 
 */

function solution(inputArray) {
    const difference = [];
    inputArray.forEach((number, index) => {
        if (typeof inputArray[index + 1] === 'number') {
            const nextNumber = inputArray[index + 1];
            difference.push(Math.abs(nextNumber - number));
        }
    })
    return Math.max(...difference);
}

console.log(solution([2, 4, 1, 0]));