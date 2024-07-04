/**
 * 
 * @param {String} name 
 */

function solution(name) {
    return /^[a-zA-Z_]+[a-zA-Z0-9_]*$/.test(name);

}

console.log(solution('3var_1__Int'))