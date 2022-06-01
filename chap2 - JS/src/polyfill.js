// @ts-check

require('core-js')

const complicatedArray = [1, [2, 3]]
const flatendArray = complicatedArray.flat()

console.log(flatendArray);