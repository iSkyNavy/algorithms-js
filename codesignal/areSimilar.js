/**
 * wo arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar.

For a = [1, 2, 3] and b = [1, 2, 3], the output should be
solution(a, b) = true.

For a = [1, 2, 2] and b = [2, 1, 1], the output should be
solution(a, b) = false.
 */

/**
 * 
 * @param {Array<number>} a 
 * @param {Array<number>} b
 */

function solution(a, b) {
    const ad = a.filter((v, i) => v != b[i])
    const bd = b.filter((v, i) => v != a[i])
    return ad.length == 0 || (ad.length == 2 && ad.join('') == bd.reverse().join(''))
}


console.log(solution([1, 1, 4], [1, 2, 3]));
