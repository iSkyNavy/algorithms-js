/**
 * You are given an array of integers representing coordinates of obstacles situated on a straight line.

Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

Find the minimal length of the jump enough to avoid all the obstacles.

For inputArray = [5, 3, 6, 7, 9], the output should be
solution(inputArray) = 4.

*/

/**
 * 
 * @param {Array<number>} obstacles 
 */

function solution(obstacles) {
    obstacles.sort((a, b) => a - b);  // Sort obstacles (optional)
    let jumpLength = 1;

    while (true) {
        if (obstacles.every(obstacle => obstacle % jumpLength !== 0)) {
            return jumpLength;
        }
        jumpLength++;
    }
}
/* 
console.log(solution([5, 3, 6, 7, 9]))
console.log(solution([2, 3])) */
console.log(solution([1, 4, 10, 6, 2]))

