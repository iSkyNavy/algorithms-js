function findNaughtyStep(original, modified) {
    if (original.length === modified.length) return '';
    const iterator = original.length >= modified.length ? original : modified

    for (let index = 0; index < iterator.length; index++) {
        const element = original[index];
        const elementModified = modified[index];
        if (element !== elementModified) return iterator[index];
    }
    return '';
}

/* const original = 'stepfor'
const modified = 'stepor' */
const original = 'abc'
const modified = 'ab'
console.log(findNaughtyStep(original, modified), '++++');