/* eslint-disable no-continue */
// @ts-check

const { log } = require("console");
const fs = require("fs");

const data = fs.readFileSync('local/big-file.txt', 'utf-8')

/** @type {Object.<string, number>} */
const numBlockPerCharacter = {
    a: 0,
    b: 0,
};

/** @type {string | undefined} */
let prevCharacter;

let chunkCount = 0;


for (let i = 0; i < data.length; i += 1) {
    // @ts-ignore
    if (data[i] !== prevCharacter) {
        const newCharacter = data[i];
        if (!newCharacter) {
            continue;
        }
        // @ts-ignore
        prevCharacter = newCharacter;
        numBlockPerCharacter[newCharacter] += 1;
        chunkCount += 1;
    }
}

log(numBlockPerCharacter)
log(chunkCount)