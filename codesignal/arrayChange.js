/**
 * You are given an array of integers. On each move you are allowed to increase exactly one of its element by one.
 * Find the minimal number of moves required to obtain a strictly increasing sequence from the input.
    For inputArray = [1, 1, 1], the output should be
    solution(inputArray) = 3.

    inputArray: [-1000, 0, -2, 0] // 5 = 1(3) 2(2)
    1 = -2 + 3
    inputArray: [2, 1, 10, 1] // 12 = 3(2) 11(10)
    inputArray: [2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15] // 13

 */

/**
 * 
 * @param {Array<number>} inputArray 
 */

function solution(inputArray) {
    let acc = 0;
    for (let index = 0; index < inputArray.length; index++) {
        const element = inputArray[index];
        const nextElement = inputArray[index + 1];
        if (nextElement <= element) {
            inputArray[index + 1] = element + 1;
            acc = acc + (element + 1 - nextElement)
        };
    }
    return acc;
}

console.log(solution([1, 1, 1])); // 2(1) 3(2) 3
console.log(solution([1, 2, 2])); // 2(0) 3(1) 1
console.log(solution([1, 4, 3])); // 4(0) 5(2) 2
console.log(solution([1, 2, 3, 4, 6, 3])); // 2(0) 3(0) 4(0) 6(0) 7(4) 4
console.log(solution([-1000, 0, -2, 0])); // 2(0) 3(0) 4(0) 6(0) 7(4) 4