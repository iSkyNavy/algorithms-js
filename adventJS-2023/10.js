function createChristmasTree(ornaments, height) {
    const total = (height * (height + 1)) / 2;
    const repeatCount = parseInt(total / ornaments.length);
    const rest = total % ornaments.length;
    const totalOrnaments = ornaments.repeat(repeatCount) + ornaments.slice(0, rest);
    let result = '';
    for (let index = 0, from = 0, to = 1, interval = 2; index < height; index++) {
        const onmt = totalOrnaments.slice(from, to);
        result = result + " ".repeat(height - index - 1) + onmt + "\n"
        interval = interval + index;
        from = to;
        to = to + interval
    }
    return result;
    // return '|'
}


console.log(createChristmasTree("123", 4), '---')

/* 
        1  => indice 0 hasta 1 => + 1 ~ + 2
      2 3  => indice 1 hasta 3 => + 2 ~ + 3
     1 2 3 => indice 3 hasta 6 => + 3 ~ + 4
    1 2 3 1 => indice 6 hasta 10 => + 4 ~ + 5
   2 3 1 2 3 => indice 10 hasta  15
   |
*/