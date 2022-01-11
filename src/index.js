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
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
    },
};
