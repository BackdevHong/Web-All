/* eslint-disable no-continue */
// @ts-check

const { log } = require("console");
const fs = require("fs");

const rs = fs.createReadStream("local/big-file.txt", {
    encoding: "utf-8",
    highWaterMark: 65536 * 4,
});

/** @type {Object.<string, number>} */

const numBlockPerCharacter = {
    a: 0,
    b: 0,
};

/** @type {string | undefined>} */
let prevCharacter;
let chunkCount = 0;

rs.on("data", (data) => {
    chunkCount += 1;
    if (typeof data !== "string") {
        return;
    }

    for (let i = 0; i < data.length; i += 1) {
        if (data[i] !== prevCharacter) {
            const newCharacter = data[i];

            if (!newCharacter) {
                continue;
            }

            prevCharacter = newCharacter;
            numBlockPerCharacter[newCharacter] += 1;
        }
    }
});

rs.on("end", () => {
    log("Event: end");
    log("blockCount", numBlockPerCharacter);
    log("chunkCount", chunkCount);
});
