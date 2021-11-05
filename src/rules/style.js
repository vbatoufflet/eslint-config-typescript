module.exports = {
    extends: ["eslint:recommended"],
    rules: {
        "curly": ["error", "all"],
        "eqeqeq": ["error", "always"],
        "lines-between-class-members": ["error", "always", {exceptAfterSingleLine: true}],
        "new-cap": "error",
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-duplicate-imports": "error",
        "no-empty": ["error", {allowEmptyCatch: true}],
        "no-restricted-imports": ["error", {patterns: ["..(?:/*)?"]}],
        "no-unused-vars": "off",
        "object-shorthand": "error",
        "padding-line-between-statements": [
            "error",
            {blankLine: "always", prev: ["export", "function"], next: "block-like"},
            {blankLine: "always", prev: "block-like", next: ["export", "function"]},
        ],
        "prefer-template": "error",
        "quotes": ["error", "double", {avoidEscape: true, allowTemplateLiterals: false}],
    },
};
