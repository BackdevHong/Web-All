/* eslint-disable no-console */
// @ts-check

const dns = require("dns");

dns.lookup("naver.com", (err, address, family) => {
    console.log("address: %j family: IPv%s", address, family);
});
