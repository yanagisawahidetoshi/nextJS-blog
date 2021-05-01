const baseConfig = require("./jest.config");

module.exports = {
  ...baseConfig,
  name: "Storyshots",
  displayName: "storyshots",
  testMatch: ["<rootDir>/src/storyshots.test.js"],
};
