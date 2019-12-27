module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ["plugin:react/recommended", "airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    quotes: [1, "double"],
    "react/prop-types": [0],
    "react/jsx-filename-extension": [0],
    "react/jsx-props-no-spreading": [0],
    "import/no-unresolved": [0],
    "import/extensions": [0],
    "implicit-arrow-linebreak": [0],
    "comma-dangle": [1, "never"],
    "no-unused-vars": [1],
    "import/order": [1],
    "@typescript-eslint/explicit-function-return-type": ["error"]
  }
};
