// @ts-check
/* eslint-disable no-console */

const fs = require('fs')

async function main() {
    try {
        const result = await fs.promises.readFile('Closure.js', 'utf-8')
        console.log(result);
    } catch (error) {
        console.log('파일을 찾을 수 없음.');
    }
}

main()

