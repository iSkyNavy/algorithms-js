function solution(cell1, cell2) {
    const group1 = ['a', 'c', 'e', 'g'];
    const group2 = ['b', 'd', 'f', 'h'];
    const cell1Letter = cell1[0];
    const cell2Letter = cell2[0];
    const cell1Number = cell1[1];
    const cell2Number = cell2[1];
    const isCell1Par = cell1Number % 2 === 0;
    const isCell2Par = cell2Number % 2 === 0;
    const result1 = (group1.includes(cell1Letter) && !isCell1Par) || (group2.includes(cell1Letter) && isCell1Par) ? 'color' : '';
    const result2 = (group1.includes(cell2Letter) && !isCell2Par) || (group2.includes(cell2Letter) && isCell2Par) ? 'color' : '';
    return result1 === result2;
}

console.log(solution('a1', 'a2'))
