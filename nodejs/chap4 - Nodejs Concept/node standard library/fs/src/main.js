/* eslint-disable node/no-unsupported-features/node-builtins */
// @ts-check

const log = require("console");
const fs = require("fs");

// callback-style
fs.readFile("main.js", "utf-8", (err, result) => {
    if (err) {
        log.error(err);
    } else {
        log.log(result);
    }
});

// sync-style
const result = fs.readFileSync("main.js", "utf-8");
log.log(result);

// 자동으로 오류를 띄워줌, 오류 핸들링을 하기 위해선 TryCatch문 사용
// const result = fs.readFileSync("main.jsx", "utf-8");
// console.log(result);

// promise-style
async function main() {
    const result2 = await fs.promises.readFile("main.js", "utf-8");
    log.log(result2);
}

main();

// 만약 node.js가 구버전이라 fs.promises를 사용하실 수 없다면?

// const util = require("util");
// async function submain() {
//     const result = await util.promisify(fs.readFile)("main.js", "utf-8");
//     console.log(result);
// }

// submain();
