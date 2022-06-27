// @ts-check

const fs = require("fs");

fs.readFile("main.js", "utf-8", (err, result) => {
    if (err) {
        console.error(err);
    } else {
        console.log(result);
    }
});

// console.log("heh");
