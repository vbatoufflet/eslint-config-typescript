module.exports = {
    extends: ["plugin:unicorn/recommended"],
    rules: {
        "unicorn/better-regex": "off",
        "unicorn/catch-error-name": ["error", {name: "err"}],
        "unicorn/escape-case": "off",
        "unicorn/no-array-for-each": "off",
        "unicorn/no-array-reduce": "off",
        "unicorn/no-nested-ternary": "off",
        "unicorn/no-new-array": "off",
        "unicorn/no-null": "off",
        "unicorn/no-process-exit": "off",
        "unicorn/prefer-dom-node-append": "off",
        "unicorn/prefer-module": "off",
        "unicorn/prefer-node-protocol": "off",
        "unicorn/prefer-object-from-entries": "off",
        "unicorn/prevent-abbreviations": "off",
    },
};
