module.exports = {
  env: {
    esnext: true,
    node: true,
  },
  extends: ["airbnb-base", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {},
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
