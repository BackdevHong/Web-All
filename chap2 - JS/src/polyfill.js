// @ts-check

require('core-js')

const complicatedArray = [1, [2, 3, 4]]
const flatendArray = complicatedArray.flat()

console.log(flatendArray);