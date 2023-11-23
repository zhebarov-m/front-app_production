module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:i18next/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "i18next"
    ],
    "rules": {
        "react/jsx-indent": [2, 4],
        "@typescript-eslint/indent": ["error", 4],
        "@typescript-eslint/explicit-function-return-type": "warn",
        "react/jsx-filename-extension": [2, {"extensions": [".js", ".jsx", '.tsx']}],
        "react/react-in-jsx-scope": "off",
        "no-unused-vars": "warn",
        "react/require-default-props": 'off',
        "react/jsx-props-no-spreading": 'warn',
        "react/function-component-definition": 'off',
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/no-floating-promises": 'off',
        "@typescript-eslint/naming-convention": 'off',
        "i18next/no-literal-string": ['error', {markupOnly: true}]
    },
    globals: {
        '__IS_DEV__': true,
    },
}
