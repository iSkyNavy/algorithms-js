function solution(inputArray, elemToReplace, substitutionElem) {
    /* let newResult = [];
    for (let i = 0; i < inputArray.length; i++) {
        const element = inputArray[i];
        if (element === elemToReplace) newResult.push(substitutionElem);
        else newResult.push(element);

    }
    return newResult; */

    // return inputArray.map(element => element === elemToReplace ? substitutionElem : element);
    const rgx = new RegExp(elemToReplace, 'g')
    const arrJoin = inputArray.join('').replace(rgx, substitutionElem).split("");
    return arrJoin.map(element => parseInt(element));
}


console.log(solution([1, 2, 1], 1, 3));