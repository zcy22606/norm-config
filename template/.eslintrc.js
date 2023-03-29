const { getEslintRules } = require("./eslintRules.js");

const getVue3Cfg = (needRulesCfg = false) => {
  return `
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    'plugin:json/recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    ${process.env.IS_TS ? "'plugin:@typescript-eslint/recommended'," : null}
    // 1. 接入 prettier 的规则
    '@vue/prettier',
    "prettier",
    "plugin:prettier/recommended"
  ],
  plugins: ['prettier', ${process.env.IS_TS ? "'@typescript-eslint'" : ""} ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    ${process.env.IS_TS
    ? " parser: '@typescript-eslint/parser' // 解析 .ts 文件"
    : ""
  }
  },
  ${needRulesCfg ? getEslintRules("vue3") : ""}
}
`;
};
const getReactCfg = (needRulesCfg = false) => {
  return `
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    'plugin:json/recommended',
    'eslint:recommended',
    "plugin:react/recommended",
    ${process.env.IS_TS ? "'plugin:@typescript-eslint/recommended'," : ""}
    // 1. 接入 prettier 的规则
    "prettier",
    "plugin:prettier/recommended"
  ],
  plugins: ['prettier', ${process.env.IS_TS ? "'@typescript-eslint'" : ""} ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    ${process.env.IS_TS
    ? " parser: '@typescript-eslint/parser' // 解析 .ts 文件"
    : ""
  }
  },
  rules:{
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    semi: 'off', //语句强制分号结尾
    ${needRulesCfg ? getEslintRules("react") : ``}
  }
}
`;
};
const getDefaultCfg = (needRulesCfg = false) => {
  return `
  module.exports = {
    root: true,
    env: {
      browser: true,
      es2021: true,
      node: true,
      jest: true
    },
    extends: [
      'plugin:json/recommended',
      'eslint:recommended',
      ${process.env.IS_TS ? "'plugin:@typescript-eslint/recommended'," : ""}
      // 1. 接入 prettier 的规则
      "prettier",
      "plugin:prettier/recommended"
    ],
    plugins: ['prettier', ${process.env.IS_TS ? "'@typescript-eslint'" : ""}],
    parserOptions: {
      ecmaVersion: 11,
      sourceType: 'module',
      ${process.env.IS_TS
      ? "parser: '@typescript-eslint/parser' // 解析 .ts 文件"
      : ""
    }
    },
  }
`;
};

const getEslintrcConfig = (options = null) => {
  let { env } = options;
  switch (env) {
    case "vue3":
      return getVue3Cfg();
    case "react":
      return getReactCfg();
    default:
      return getDefaultCfg();
  }
};

module.exports = {
  getEslintrcConfig,
};
