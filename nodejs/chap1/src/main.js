// @ts-check
// Formatting : Prettier
// Linting : ESLint

const http = require("http");

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.end("Hello");
});

const PORT = 4000;
server.listen(PORT, () => {
    // console.log(`the Server is listening on port ${PORT}`);
});
