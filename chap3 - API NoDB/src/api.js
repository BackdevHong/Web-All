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
 * @property {() => Promise<*>} callback
 */

/** @type {Route[]} */
const routes = [
    {
        url: /^\/posts$/,
        method: "GET",
        callback: async () => ({
            statusCode: 200,
            body: "All posts",
        }),
    },
    {
        url: /^\/posts\/([a-zA-z0-9-_]+)$/,
        method: "GET",
        callback: async () => ({
            statusCode: 200,
            body: {},
        }),
    },
    {
        url: /^\/posts$/,
        method: "POST",
        callback: async () => ({
            statusCode: 200,
            body: {},
        }),
    },
];

module.exports = {
    routes,
};
