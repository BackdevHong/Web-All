// @ts-check

// require

// console.log(require('./animals'))

// module

const {path, paths, filename} = module

console.log({
    path,
    paths,
    filename,
})

// CommonJS : require
// ECMAScript : export, import

// const animalsA = require('./animals')
// const animalsB = require('./animals')
// const animalsC = require('./animals')

// console.log(animalsA, animalsB, animalsC)
// console.log(animalsA == animalsB)
// console.log(animalsB == animalsC)

// 예외상황
const http = require('http')
console.log(http)

const animals = require('animals')
console.log(animals)