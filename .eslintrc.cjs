module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "@nuxtjs",
    "plugin:vue/vue3-recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [],
  rules: {
    "no-undef": "off",
    "prettier/prettier": "error",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off", // 禁用 console
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off", // 禁用 debugger
    "vue/require-default-prop": "off", // 關閉 prop 無設定 default值
    "no-unused-vars": "off",
    "vue/multi-word-component-names": "off",
    "vue/no-multiple-template-root": "off",
  },
};
