module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'eslint:recommended',
        'prettier'
    ],
    parserOptions: {
        parser: '@babel/eslint-parser',
    },
    rules: {
        'no-unused-vars': 'off',
        'vue/no-reserved-component-names': 'off',
        'vue/multi-word-component-names': 'off',
    },
};