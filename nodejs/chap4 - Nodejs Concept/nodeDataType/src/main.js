/* eslint-disable no-console */
// @ts-check

// buffer
const fs = require("fs");

const bufFromFile = fs.readFileSync("test.txt");
const buf = Buffer.from([97, 98, 99, 100, 101]);

const bufA = Buffer.from([0]);
const bufB = Buffer.from([3]);
const bufC = Buffer.from([2]);
const bufD = Buffer.from([1]);

console.log(buf);
console.log(bufFromFile);

// Buffer compare & sort
const bufs = [bufA, bufB, bufC, bufD];
bufs.sort(Buffer.compare);
console.log(bufs);
