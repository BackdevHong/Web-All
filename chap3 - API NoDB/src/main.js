const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == "/posts" && req.method === "GET") {
        res.statusCode = 200
        res.end('posts')
    } else if (req.url && /^\/posts\/[a-zA-z0-9-_]+$/.test(req.url)) {
        req.statusCode = 200
        res.end('Some content of the post')
    } else if (req.url === "/posts" && req.method === 'POST') {
        res.statusCode = 200
        res.end('creating Post')
    } else {
        res.statusCode = 404;
        res.end("Error! 404...")
    }
    res.statusCode = 200;
    res.end('Hello!')
})

const PORT = 4000

server.listen(PORT, () => {
    console.log(`The Server is listening at port: ${PORT}`);
})