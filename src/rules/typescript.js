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
        "@typescript-eslint/method-signature-style": ["error", "method"],
        "@typescript-eslint/naming-convention": [
            "error",
            {selector: "enumMember", format: ["UPPER_CASE"]},
            {selector: "typeLike", format: ["PascalCase"]},
            {selector: "variableLike", format: ["camelCase"]},
        ],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/sort-type-union-intersection-members": "error",
    },
};
