// @ts-check

const { log } = require("console");
const fs = require("fs");

const rs = fs.createReadStream("local/big-file.txt");

rs.on("data", (data) => {
    log("Event: data", data[0]);
});

rs.on("end", () => {
    log("Event: end");
});
