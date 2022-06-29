/* eslint-disable no-continue */
// @ts-check

const { log } = require("console");
const fs = require("fs");

const rs = fs.createReadStream("local/big-file.txt", {
    encoding: "utf-8",
});

/** @type {Object.<string, number>} */

const numBlockPerCharacter = {
    a: 0,
    b: 0,
};

/** @type {string | undefined>} */
let prevCharacter;

rs.on("data", (data) => {
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
});
