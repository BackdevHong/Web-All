// @ts-check
const http = require('http');

/**
 * @typedef Post
 * @property {string} id
 * @property {string} title
 * @property {string} content
 */

/**@type {Post[]} */
const posts = [
    {
        id: 'my_first_project',
        title: "My first Project",
        content: "My first Project"
    },
    {
        id: 'my_second_project',
        title: "내 두번째 포스트지롱",
        content: "My_second_Project"
    }
]

const server = http.createServer((req, res) => {
    const POST_ID_REGEX = /^\/posts\/([a-zA-z0-9-_]+)$/
    const postIdRegexResult = req.url && POST_ID_REGEX.exec(req.url) || undefined;

    if (req.url == "/posts" && req.method === "GET") {
        const result = {
            posts : posts.map((post) => ({
                id: post.id,
                title: post.title,
            })),
            totalCount: posts.length
        }
        res.statusCode = 200
        res.setHeader('Content-type', 'application/json; charset=utf-8')
        res.end(JSON.stringify(result))
    } else if (postIdRegexResult) {
        // GET /posts/:id
        const postId = postIdRegexResult[1]
        const post = posts.find(post => post.id === postId)
        if (post) {
            res.statusCode = 200;
            res.setHeader('Content-type', 'application/json; charset=utf-8')
            res.end(JSON.stringify(post))
        } else {
            res.statusCode = 404;
            res.end('Post Not Found')
        }
    } else if (req.url === "/posts" && req.method === 'POST') {
        res.statusCode = 200
        res.end('creating Post')
    } else {
        res.statusCode = 404;
        res.end("Error! 404...")
    }
})

const PORT = 4000

server.listen(PORT, () => {
    console.log(`The Server is listening at port: ${PORT}`);
})