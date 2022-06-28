// @ts-check

const { log } = require("console");
const fs = require("fs");

const rs = fs.createReadStream("local/big-file.txt", {
    encoding: "utf-8",
});

let chunkCount = 0;

rs.on("data", (data) => {
    chunkCount += 1;
    log("Event: data", data[0]);
});

rs.on("end", () => {
    log("Event: end");
    log("chunkCount: ", chunkCount);
});
