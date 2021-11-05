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
        "@typescript-eslint/naming-convention": [
            "error",
            {selector: "enum", format: ["PascalCase"]},
            {selector: "enumMember", format: ["UPPER_CASE"]},
            {selector: "interface", format: ["PascalCase"]},
            {selector: "typeAlias", format: ["PascalCase"]},
            {selector: "variable", format: ["camelCase"]},
        ],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": ["error"],
    },
};
