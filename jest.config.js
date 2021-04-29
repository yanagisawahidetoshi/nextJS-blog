module.exports = {
  roots: ["<rootDir>"],
  moduleFileExtensions: ["js", "ts", "tsx", "json"],
  testPathIgnorePatterns: ["<rootDir>[/\\\\](node_modules|.next)[/\\\\]"],
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$",
    "node_modules/(?!@shotgunjed)/",
  ],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
    "^.+\\.[tj]sx?$": "./jest.transform.js",
    "^.+\\.mdx?$": "@storybook/addon-docs/jest-transform-mdx",
  },
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__mocks__/fileMock.js",
  },
  testEnvironment: "jsdom",
};
