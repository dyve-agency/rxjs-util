const jest = require('jest');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.spec.json',
    },
  },
  modulePathIgnorePatterns: [
    "<rootDir>[/\\\\](dist|docs|node_modules|deploy|scripts)[/\\\\]"
  ],
  watchPathIgnorePatterns: [
    'tmp\/'
  ],
  testTimeout: 1000000,
};
