/* 
*
**
***
****
*****
*/

const createSecuencia = (lenght) => {
    let result = '';
    for (let index = 0; index < lenght; index++) {
        result = result + '*'.repeat(index + 1) + '\n'
    }
    return result;
}

//console.log(createTriangle(5));

/* 
    *   => 1 = 1 + 0  | 4 spaces
   ***  => 3 = 2 + 1  | 3 spaces
  ***** => 5 = 3 + 2  | 2 spaces
 ******* => 7 = 4 + 3 | 1 space
********* => 9 = 5 + 4| 0 space
*/

const createTriangle = (lenght) => {
    let result = '';
    for (let index = 1; index <= lenght; index++) {
        const repeatCharacter = lenght - index;
        result = result + (' ').repeat(repeatCharacter) + '*'.repeat(index + index - 1) + (' ').repeat(repeatCharacter) + '\n'
    }
    return result.split('').reverse().join('');
}

console.log(createTriangle(5));
