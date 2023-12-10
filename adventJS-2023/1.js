function findFirstRepeated(gifts) {
    const dictionary = [];
    for (let index = 0; index < gifts.length; index++) {
        const element = gifts[index];
        if (dictionary.includes(element)) return element;
        dictionary.push(element)
    }
    return -1
}

const gifts = [5, 13, 11, 51];

const result = findFirstRepeated(gifts);

console.log(result);