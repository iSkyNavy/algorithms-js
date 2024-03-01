const world = 'hola mi nombre es Diegho ramos 444'

/**
 * 
 * @param {String} world 
 */
const transformToLower = (world) => {
    const matches = world.match(/[a-zA-Z]+/g);
    const resp = matches.map(item => {
        let letter = item.split("")
        letter[0] = letter[0].toUpperCase();
        return letter.join("")
    })
    return resp;
}

console.log(transformToLower(world))