function organizeGifts(gifts) {
    const rgx = /[0-9]+[a-z]{1}/g;
    const giftMatchs = [...gifts.matchAll(rgx)];
    let result = '';
    giftMatchs.map(match => {
        const gift = match[0];
        const [typeGift, amountGift] = [gift[gift.search(/[a-zA-Z]/)], gift.match(/[0-9]+/)[0]]
        const boxes = parseInt(amountGift / 10);
        const bags = amountGift % 10;
        const pales = parseInt(boxes / 5);
        const finalBoxes = boxes % 5;
        if (pales) result = result + `[${typeGift}]`.repeat(pales);
        if (finalBoxes) result = result + `{${typeGift}}`.repeat(finalBoxes);
        if (bags) result = result + `(${typeGift.repeat(bags)})`;
    })
    return result;
}

const result1 = organizeGifts(`76a11b`)
console.log(result1)

/*
76a11b

// '[a]{a}{a}(aaaaaa){b}(b)'


Cada 10 regalos del mismo tipo se empaquetan en una caja, representada por {x}. Por ejemplo, 
20 regalos tipo a se empaquetan en 2 cajas así: {a}{a}.

Cada 5 cajas se apilan en un palé, representado por [x]. Por ejemplo, 10 cajas de a se apilan en 2 palés
de esta manera: [a][a]

Cualquier regalo adicional se coloca en una bolsa, representada por () y se colocan todas dentro.
Por ejemplo 4 regalos de b se colocan en una bolsa así (bbbb)

*/