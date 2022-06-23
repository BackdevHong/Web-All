// @ts-check

// require

console.log(require('./animals'))

// module

const {path, paths, filename} = module

console.log({
    path,
    paths,
    filename,
})

// CommonJS : require
// ECMAScript : export, import

