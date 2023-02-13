// Reference: hackerrank.com/challenges/absolute-permutation/problem

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'absolutePermutation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 */

const defaultValue = [-1];
function absolutePermutation(n, k) {
    const result = [];
    if (k == 0) {
        for (let i = 1; i <= n; i++) {
            result.push(i);
        }
        
        return result;
    }
    else if (k > Math.floor(n / 2)) return defaultValue;
    else {
        let mapDataPermutation = {};
        for (let i = 1; i <= n; i++) {
            let p = i > k ? i - k : i + k;
            
            if (p > n || mapDataPermutation[p]) {
                p = i < k ? i - k : i + k;
                
                if (p > n || mapDataPermutation[p]) return defaultValue;
            }
            
            result.push(p);
            mapDataPermutation[p] = 1;
        }
        
        return result;
    }
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const n = parseInt(firstMultipleInput[0], 10);

        const k = parseInt(firstMultipleInput[1], 10);

        const result = absolutePermutation(n, k);

        ws.write(result.join(' ') + '\n');
    }

    ws.end();
}
