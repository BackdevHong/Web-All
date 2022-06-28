/* eslint-disable no-console */
// @ts-check

// 스트림으로 큰 파일 처리하기

const fs = require("fs");

const ws = fs.createWriteStream("local/big-file.txt");

const NUM_MBYTES = 500;

console.time("for");

for (let i = 0; i < NUM_MBYTES; i += 1) {
    ws.write("a".repeat(1024 * 1024));
}

console.timeEnd("for");
