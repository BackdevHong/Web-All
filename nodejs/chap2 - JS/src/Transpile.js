const objs = [
    {
        foo: {
            bar: {
                baz: 1,
            },
        },
    },
    {},
    {
        foo: {},
    },
];

console.log(
    objs.map((obj) => {
        const { foo } = obj;
        if (foo) {
            const { bar } = foo;
            if (bar) {
                return bar.baz;
            }
        }
        return undefined;
    })
);

const result = objs.map((obj) => obj.foo?.bar?.baz);

console.log(result);
