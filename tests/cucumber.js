// cucumber.js

require('dotenv').config();

const retry = process.env.RETRY || require('dotenv').config().parsed.CUCUMBER_RETRY;
const parallel = process.env.PARALLEL || require('dotenv').config().parsed.CUCUMBER_PARALLEL;
const tags = process.env.TAGS || require('dotenv').config().parsed.CUCUMBER_TAGS;

module.exports = {
  default: {
    require: ['tests/Step_Definitions/**/*.js'],
    paths: ['tests/features/*.feature'],
    parallel: parseInt(parallel, 10),
    tags: tags,
    retry: parseInt(retry,10),
    format: ['json:reports/cucumber-report.json'],
  },
};
