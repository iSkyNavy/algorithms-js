const world = "adufhja45sofjas''65$as  dfsafsa41afs1sa44s4s";


/**
 * 
 * @param {String} world 
 */
const sanitizeWorld = (world) => {
    const resp = world.replace(/([^0-9])/g, '');
    return resp;
}

console.log(sanitizeWorld(world));