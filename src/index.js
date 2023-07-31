module.exports = {
    env: {
        node: true,
    },
    extends: [
        "./rules/import",
        "./rules/prettier",
        "./rules/style",
        "./rules/typescript",
        "./rules/unicorn",
    ].map(v => require.resolve(v)),
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
    },
};
