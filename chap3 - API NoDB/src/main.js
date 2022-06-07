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

        if (!req.url || !route) {
            res.statusCode = 404;
            res.end("error, not found");
            return;
        }

        const regexResult = route.url.exec(req.url);

        if (!regexResult) {
            res.statusCode = 404;
            res.end("error, not found");
            return;
        }

        /** @type {Object.<string, *> | undefined} */
        const reqBody =
            (req.headers["content-type"] === "application/json" &&
                (await new Promise((resolve, reject) => {
                    req.setEncoding("utf-8");
                    req.on("data", (data) => {
                        try {
                            resolve(JSON.parse(data));
                        } catch {
                            reject(new Error("Error"));
                        }
                    });
                }))) ||
            undefined;

        const result = await route.callback(regexResult, reqBody);
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
