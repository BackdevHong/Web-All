/* eslint-disable no-console */
// @ts-check

const fs = require("fs");

const stream = fs.createReadStream("test.txt");

// stream == 자유자재로 연결이 가능한 파이프와 같다.

stream.pipe(process.stdout);
