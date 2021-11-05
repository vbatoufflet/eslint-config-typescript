module.exports = {
    extends: ["plugin:import/recommended", "plugin:import/typescript"],
    plugins: ["import"],
    rules: {
        "import/exports-last": "error",
        "import/first": "error",
        "import/newline-after-import": "error",
        "import/no-extraneous-dependencies": "error",
        "import/no-mutable-exports": "error",
        "import/no-self-import": "error",
        "import/no-unassigned-import": "error",
        "import/no-useless-path-segments": ["error", {noUselessIndex: true}],
        "import/order": [
            "error",
            {
                "alphabetize": {order: "asc"},
                "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
                "newlines-between": "always",
            },
        ],
    },
    settings: {
        "import/internal-regex": "^~",
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
            typescript: {
                alwaysTryTypes: true,
            },
        },
    },
};
