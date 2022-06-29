// @ts-check

const fs = require("fs");
const stream = require("stream");
const zlib = require("zlib");
const util = require("util");

async function Gzip() {
    return util.promisify(stream.pipeline)(
        fs.createReadStream("local/big-file.txt"),
        zlib.createGzip(),
        fs.createWriteStream("local/big-file.gz")
    );
}

async function Gunzip() {
    return util.promisify(stream.pipeline)(
        fs.createReadStream("local/big-file.gz"),
        zlib.createGunzip(),
        fs.createWriteStream("local/big-file.unzipped")
    );
}

async function main() {
    await Gzip();
    await Gunzip();
}

main();
