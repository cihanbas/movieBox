module.exports = {
  env: {
    browser: true,
    es2021: true,
    "react-native/react-native": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-native/all",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "react-native", "prettier"],
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "react/react-in-jsx-scope": "off", // For React 17+
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
