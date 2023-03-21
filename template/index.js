const fse = require("fs-extra");
const path = require("path");
const { getEslintrcConfig } = require("./.eslintrc");
const { getPrettierrcCfg } = require("./.prettierrc");
const { getStylelintCfg } = require("./.stylelintrc");
const { getCommitlintCfg } = require("./commitlint.config.js");

const getEditorConfig = async () => {
  const data = await fse.readFile(path.resolve(__dirname, ".editorConfig"));
  return data;
};

const getPrettierrcIgnore = () => {
  const data = fse.readFileSync(path.resolve(__dirname, ".prettierrcIgnore"));
  return data;
};

const getBuidevReadme = () => {
  const data = fse.readFileSync(path.resolve(__dirname, "buidev-readme.md"));
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
