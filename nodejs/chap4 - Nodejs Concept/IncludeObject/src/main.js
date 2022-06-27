/* eslint-disable no-console */
// @ts-check

// __dirname, __filename
console.log("__dirname", __dirname);
console.log("__filename", __filename);

// process
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
    console.log(data, data.length);
});

process.stdin.pipe(process.stdout);

console.log(process.argv);

// process.exit(1);

// setInterval, setTimeout

// let count = 0

// setInterval(() => {
//     console.log("interval");
// }, 1000);

// setTimeout(() => {
//     console.log("timeout");
// }, 1000);

// SetInterval, serTimeout - 응용

let count = 0;
const handle = setInterval(() => {
    console.log("Interval");
    count += 1;

    if (count === 4) {
        console.log("done!");
        clearInterval(handle);
    }
}, 1000);

const timeouthandle = setInterval(() => {
    console.log("timeout!");
}, 1000);

clearTimeout(timeouthandle);
