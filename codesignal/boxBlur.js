/**
 * 
 * @param {Array<Array<number>>} image 
 */

function solution(image) {
    const numRows = image.length;
    const numCols = image[0].length;
    const result = [];

    for (let i = 1; i < numRows - 1; i++) {
        const row = [];
        for (let j = 1; j < numCols - 1; j++) {
            const sum = (
                image[i - 1][j - 1] + image[i - 1][j] + image[i - 1][j + 1] +
                image[i][j - 1] + image[i][j] + image[i][j + 1] +
                image[i + 1][j - 1] + image[i + 1][j] + image[i + 1][j + 1]
            );
            const average = Math.floor(sum / 9);
            row.push(average);
        }
        result.push(row);
    }

    return result;
}


console.log(solution([[7, 4, 0, 1],
[5, 6, 2, 2],
[6, 10, 7, 8],
[1, 4, 2, 0]]))


console.log(solution([[1, 1, 1],
[1, 7, 1],
[1, 1, 1]]))