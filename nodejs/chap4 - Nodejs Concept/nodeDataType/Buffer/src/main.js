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

// Buffer에 있는 여러가지 함수들
const buff = Buffer.from([0, 1, 0, 0]);

// 버퍼에 여부 확인 - isBuffer
// console.log(Buffer.isBuffer([0, 1, 2, 3]));

// 위 버퍼를 정수로 읽는 법 - readInt32
console.log(buff.readInt32LE()); // LE : Little Endian ( 앞을 제일 작은수로 본다. )
console.log(buff.readInt32BE()); // BE: Big Endian ( 뒤를 제일 작은수로 본다. )

/**
 * @param {*} array
 * @returns {number}
 */
function readInt32LE(array) {
    return (
        array[0] + array[1] * 256 + array[2] * 256 ** 2 + array[3] * 256 ** 3
    );
}

/**
 * @param {*} array
 * @returns {number}
 */
function readInt32BE(array) {
    return (
        array[3] + array[2] * 256 + array[1] * 256 ** 2 + array[0] * 256 ** 3
    );
}

const offset = 0;

console.log(readInt32LE(buff));
console.log(buff.readInt32LE(offset));
console.log(readInt32BE(buff));
console.log(buff.readInt32BE(offset));
