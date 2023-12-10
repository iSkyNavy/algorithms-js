// con recursividad

function decode(message) {
    const regex = /\(([^()]+)\)/;
    const res = message.match(regex);
    if (!res) return message;
    let word = res[0].slice(1, -1).split("").reverse().join("");
    word = message.replace(regex, word)
    if (word.match(regex)) return decode(word);
    return word;
}

const a = decode('hola (odnum)')
const b = decode('sa(u(cla)atn)s')
const c = decode('(olleh) (dlrow)!')
console.log(a, b, c) // hola mundo