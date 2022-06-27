// @ts-check

const fs = require("fs");

fs.readFile("src/main.js", (err, result) => {
    if (err) {
        console.error(err);
    } else {
        console.log(result);
    }
});
