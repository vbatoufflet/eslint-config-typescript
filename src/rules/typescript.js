module.exports = {
    extends: ["plugin:@typescript-eslint/recommended"],
    overrides: [
        {
            files: ["*.js"],
            rules: {
                "@typescript-eslint/no-var-requires": "off",
            },
        },
    ],
    rules: {
        "@typescript-eslint/array-type": ["error", {default: "array"}],
        "@typescript-eslint/consistent-type-assertions": [
            "error",
            {assertionStyle: "as", objectLiteralTypeAssertions: "never"},
        ],
        "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
        "@typescript-eslint/explicit-function-return-type": ["error", {allowExpressions: true}],
        "@typescript-eslint/lines-between-class-members": [
            "error",
            "always",
            {exceptAfterSingleLine: true},
        ],
        "@typescript-eslint/method-signature-style": ["error", "method"],
        "@typescript-eslint/naming-convention": [
            "error",
            {selector: "enumMember", format: ["UPPER_CASE"]},
            {selector: "typeLike", format: ["PascalCase"]},
            {selector: "variableLike", format: ["camelCase"], leadingUnderscore: "allow"},
        ],
        "@typescript-eslint/no-duplicate-imports": "error",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/padding-line-between-statements": [
            "error",
            {
                blankLine: "always",
                prev: "*",
                next: ["class", "function", "interface", "type"],
            },
            {
                blankLine: "always",
                prev: ["class", "function", "interface", "type"],
                next: "*",
            },
            {
                blankLine: "always",
                prev: "*",
                next: ["multiline-const", "multiline-let", "multiline-var"],
            },
            {
                blankLine: "always",
                prev: ["multiline-const", "multiline-let", "multiline-var"],
                next: "*",
            },
            {blankLine: "never", prev: ["case", "default"], next: ["case", "default"]},
        ],
        "@typescript-eslint/sort-type-union-intersection-members": "error",
    },
};
