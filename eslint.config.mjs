import js from "@eslint/js";

export default [
    js.configs.recommended,

    {
        rules: {
            "no-unused-vars": "off",
            "no-undef": "off",
            "semi": ["error", "always"]
        }
    }
];