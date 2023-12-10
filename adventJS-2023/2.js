function manufacture(gifts, materials) {
    const toys = [];
    const materialLetters = materials.split("");
    for (const toy of gifts) {
        const _toyLetters = new Set(toy.split(""));
        const toyLetters = [..._toyLetters]
        const res = toyLetters.every(letter => {
            if (!materialLetters.includes(letter)) return false;
            return true
        })
        if (res) toys.push(toy);
    }
    return toys
}

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

console.log(manufacture(gifts, materials));