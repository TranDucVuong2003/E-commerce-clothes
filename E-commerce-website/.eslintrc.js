module.exports = {
    "env": {
        "browser": true,
        "es2020": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "import"
    ],
    "rules": {
        "no-extra-semi": "error",
        "import/no-unresolved": "warn",
        "import/named": "warn",
        "import/default": "warn",
        "import/namespace": "warn",
        "no-unused-vars": "warn",
        "no-undef": "error",
        "import/no-absolute-path": "warn"
    }
};