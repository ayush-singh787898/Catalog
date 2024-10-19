
const fs = require('fs');
function decodeValue(base, valueStr) {
    return parseInt(valueStr, base);
}

function findSecretConstant(points) {
    let n = points.length;
    let c = 0;

    for (let i = 0; i < n; i++) {
        let [xi, yi] = points[i];
        let li = 1;

        for (let j = 0; j < n; j++) {
            if (i !== j) {
                let [xj] = points[j];
                li *= (0 - xj) / (xi - xj);
            }
        }
        c += yi * li;
    }

    return Math.round(c);
}

function calculateSecret(jsonData) {
    let n = jsonData.keys.n;
    let k = jsonData.keys.k;

    let points = [];
    for (let i = 1; i <= n; i++) {
        let idx = String(i);
        if (jsonData[idx]) {
            let base = jsonData[idx].base;
            let valueStr = jsonData[idx].value;
            let decodedValue = decodeValue(base, valueStr);
            points.push([i, decodedValue]);
        }
    }

    if (points.length < k) {
        throw new Error(`${k}`);
    }

    return findSecretConstant(points.slice(0, k));
}

function processTestCase(filePath) {
    const data = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(data);
    const secret = calculateSecret(jsonData);
    console.log(`Secret for ${filePath}: ${secret}`);
}

processTestCase('input/testcase1.json');
processTestCase('input/testcase2.json');