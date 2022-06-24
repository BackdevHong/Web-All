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
// ㄴ node standard library에 있는 모듈은 절대경로를 지정해 가져온다.
// ㄴ 이프로젝트 내의 다른 파일은 상대경로를 지정해 가져온다.
// ㄴ 절대경로를 지정하면 module.paths의 경로들을 순서대로 검사하여 해당 모듈이 았으면 가장 첫 번째 것을 가져온다.

// const animalsA = require('./animals')
// const animalsB = require('./animals')
// const animalsC = require('./animals')

// console.log(animalsA, animalsB, animalsC)
// console.log(animalsA == animalsB)
// console.log(animalsB == animalsC)

// 예외상황
const http = require('http')
console.log(http)

const animals = require('./animals')
console.log(animals)