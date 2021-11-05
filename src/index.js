module.exports = {
    env: {
        node: true,
    },
    extends: [
        "./rules/filenames",
        "./rules/import",
        "./rules/prettier",
        "./rules/style",
        "./rules/typescript",
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
    },
};
