module.exports = {
    plugins: ["prettier"],
    rules: {
        "prettier/prettier": [
            process.env.NODE_ENV === "production" ? "error" : "warn",
            {
                arrowParens: "avoid",
                bracketSpacing: false,
                printWidth: 110,
                quoteProps: "consistent",
                tabWidth: 4,
                trailingComma: "all",
            },
        ],
    },
};
