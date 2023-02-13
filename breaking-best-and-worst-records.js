// Reference: hackerrank.com/challenges/breaking-best-and-worst-records/problem

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
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
    let min, max = 0, breakMin = 0, breakMax = 0;
    
    // validate type of input first
    if (scores && Array.isArray(scores)) {
        
        // validate type of input is number
        if (scores.length > 0 && !isNaN(scores[0])) {
            min = scores[0];
            max = scores[0];

            for (let i = 1; i < scores.length; i++) {
                // if input is not number, stop processing
                if (isNaN(scores[i])) return [breakMax, breakMin];
                
                if (scores[i] > max) {
                    max = scores[i];
                    breakMax++;
                } else if (scores[i] < min) {
                    min = scores[i];
                    breakMin++;
                }
            }
        }
    }

    return [breakMax, breakMin];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const scores = readLine().replace(/\s+$/g, '').split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
