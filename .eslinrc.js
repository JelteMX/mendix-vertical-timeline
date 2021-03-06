const deepmerge = require("deepmerge");

const base = require("@mendix/pluggable-widgets-tools/configs/eslint.ts.base.json");

delete base.parserOptions.project;

module.exports = deepmerge(base, {
    rules: {
        "@typescript-eslint/ban-ts-ignore": "off"
    }
});
