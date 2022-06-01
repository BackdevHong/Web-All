// @ts-check
/* eslint-disable no-console */

const fs = require('fs')

/**
 * @param {string} fileName
 */

function readFileInPromise(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf-8', (error, value) => {
            if (error) {
                reject(error)
            }
            resolve(value)
        })
    })
}

fs.promises.readFile('Closure.js', 'utf-8')
    .then((value) => console.log(value))
    .catch(() => { console.log("파일이 존재하지 않습니다.") });


readFileInPromise('Closure.js').then((value) => console.log(value)).catch(() => { console.log("파일이 존재하지 않습니다.") });

