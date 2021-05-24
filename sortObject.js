const object = {
    "8": {n: 1, w: 2, l: 3},
    "12": {n: 3, w: 20, l: 3},
    "128": {n: 10, w: 25, l: 4},
    "129": {n: 15, w: 19, l: 219},
    "929": {n: 4, w: 2, l: 2}
}

const resultArr = [];
for (let id in object) {
    resultArr.push({ id, ...object[id] });
}

const topThree = []
for (let j = 0; j < 3; j++) {
    let n = 0, id;
    resultArr.forEach(champ => {
        if (champ.n >= n) {
            n = champ.n;
            id = champ.id;
        }
    })
    topThree.push(resultArr.find(member => member.n === n && member.id === id));
    resultArr.splice(resultArr.findIndex(member => member.n === n && member.id === id), 1);
}

console.log(topThree);