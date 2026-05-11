import fioriTools from '@sap-ux/eslint-plugin-fiori-tools';

export default [
    ...fioriTools.configs.recommended
    {
        rules: {
            "no-var": "error",
            "semi": ["error", "always"],
            "no-console": "warn",
            "eqeqeq": "error",
            "camelcase": "warn",
            "no-unused-vars": "warn"
        }
];
