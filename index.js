const fs = require("fs");
const path = require("path");
const { getEslintrcConfig } = require("./template/.eslintrc");
const { getPrettierrcCfg } = require("./template/.prettierrc");
const { getStylelintCfg } = require("./template/.stylelintrc");
const { getCommitlintCfg } = require("./template/commitlint.config.js");


const getEditorConfig = async () => {
  const data =  fs.readFileSync(path.resolve(__dirname, ".editorConfig"));
  return data;
};

const getPrettierrcIgnore = () => {
  const data = fs.readFileSync(path.resolve(__dirname, ".prettierrcIgnore"));
  return data;
};

/** 获取readme文件 */
const getBuidevReadme = () => {
  const data = fs.readFileSync(path.resolve(__dirname, "buidev-readme.md"));
  return data;
};

module.exports = {
  getEslintrcConfig,
  getPrettierrcCfg,
  getStylelintCfg,
  getEditorConfig,
  getPrettierrcIgnore,
  getBuidevReadme,
  getCommitlintCfg,
};
