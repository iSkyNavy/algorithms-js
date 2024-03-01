function cyberReindeer(road, time) {
    const result = [road];
    let lastOpen = '.';
    let roadSplited = road.split("");
    for (let index = 0, index2 = 0; index < time - 1; index++) {
        if (index === 4) {
            roadSplited = roadSplited.join("").replaceAll('|', '*').split("");
        }
        const currentRoad = roadSplited[index2];
        const nextRoad = roadSplited[index2 + 1];
        const isOpen = nextRoad === "*";
        if (nextRoad && nextRoad != '|') {
            roadSplited[index2 + 1] = currentRoad
            roadSplited[index2] = lastOpen;
            lastOpen = isOpen ? nextRoad : '.'
            result.push(roadSplited.join(""));
            index2++;
        } else if (nextRoad == "|") {
            result.push(roadSplited.join(""));
        }
    }
    return result;
}

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time);

console.log(result);
[
    "S..|...|..",
    ".S.|...|..",
    "..S|...|..",
    "..S|...|..",
    "..S|...|..",
    "...S...*..",
    "...*S..*..",
    "...*.S.*..",
    "...*..S*..",
    "...*...S.."
]