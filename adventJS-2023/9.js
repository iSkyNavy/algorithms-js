/**
 * 
 * @param {Array<string>} lights 
 */

function adjustLights(lights) {
    /**
     * 
     * @param {Array<string>} lights 
     * @returns Number
     */
    const checkLights = (lights) => {
        let changes = 0;
        for (let index = 0; index < lights.length; index++) {
            const element = lights[index];
            const beforeElement = lights[index - 1];
            if (element === beforeElement) changes++
            lights[index] = lights[index] === '🔴' ? '🟢' : '🔴'
        }
        return changes;
    }

    Math.min(checkLights(lights), checkLights(lights.reverse()))
}

adjustLights(['v', 'r', 'v', 'v', 'v'])
// -> 1 (cambias la cuarta luz a 🔴)