// @ts-check

/**
 * @typedef Post
 * @property {string} id
 * @property {string} title
 * @property {string} content
 */

/** @type {Post[]} */
const posts = [
    {
        id: "my_first_project",
        title: "My first Project",
        content: "My first Project",
    },
    {
        id: "my_second_project",
        title: "내 두번째 포스트지롱",
        content: "My_second_Project",
    },
];

/**
 * @typedef APIResponse
 * @property {number} statusCode
 * @property {string | Object} body
 */

/**
 * @typedef Route
 * @property {RegExp} url
 * @property {'GET' | 'POST'} method
 * @property {(matches: string[], body: Object<string, *> | undefined) => Promise<APIResponse>} callback
 */

const fs = require("fs");

/**@returns {Promise<Post[]>} */
async function getPosts() {
    const json = await fs.promises.readFile('database.json', 'utf-8');
    return JSON.parse()
}

/** @type {Route[]} */
const routes = [
    {
        url: /^\/posts$/,
        method: "GET",
        callback: async () => ({
            statusCode: 200,
            body: posts,
        }),
    },
    {
        url: /^\/posts\/([a-zA-z0-9-_]+)$/,
        method: "GET",
        callback: async (matches) => {
            const postId = matches[1];
            if (!postId) {
                return {
                    statusCode: 404,
                    body: "Not Found",
                };
            }

            const post = posts.find((_post) => _post.id === postId);

            if (!post) {
                return {
                    statusCode: 404,
                    body: "Not Found",
                };
            }

            return {
                statusCode: 200,
                body: post,
            };
        },
    },
    {
        url: /^\/posts$/,
        method: "POST",
        callback: async (_, body) => {
            if (!body) {
                return {
                    statusCode: 400,
                    body: "Ill-format request",
                };
            }
            /** @type {string} */
            // eslint-disable-next-line prefer-destructuring
            const title = body.title;
            const newPost = {
                id: title.replace(/\s/g, "_"),
                title,
                content: body.content,
            };

            posts.push(newPost);
            return {
                statusCode: 200,
                body: newPost,
            };
        },
    },
];

module.exports = {
    routes,
};
