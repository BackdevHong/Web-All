/* eslint-disable no-console */
/* eslint-disable no-shadow */
// @ts-check
const http = require("http");

const { routes } = require("./api");

const server = http.createServer((req, res) => {
    async function main() {
        const route = routes.find(
            (route) =>
                req.url &&
                req.method &&
                route.url.test(req.url) &&
                route.method === req.method
        );

        if (!route) {
            res.statusCode = 404;
            res.end("error, not found");
            return;
        }

        const result = await route.callback();
        res.statusCode = result.statusCode;
        if (typeof result.body === "string") {
            res.end(result.body);
        } else {
            res.setHeader("Content-Type", "application/json; charset=utf-8");
            res.end(JSON.stringify(result.body));
        }
    }

    main();
});

const PORT = 4000;

server.listen(PORT, () => {
    console.log(`The Server is listening at port: ${PORT}`);
});
