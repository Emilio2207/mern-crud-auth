module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/prop-types": "off", // Desactiva la advertencia de prop-types
    "react-hooks/exhaustive-deps": "off", // Desactiva la advertencia de dependencias perdidas en useEffect
    "@typescript-eslint/no-explicit-any": "off", // Desactiva advertencias sobre el uso de 'any'
  },
};
