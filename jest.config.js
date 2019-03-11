module.exports = {
  modulePaths: ["src"],
  setupFiles: ["./config/jest/test-shim.js"],
  setupTestFrameworkScriptFile: require.resolve("./config/jest/test-setup.js"),
  coveragePathIgnorePatterns: ["<rootDir>/config/"],
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 75,
      lines: 75,
      statements: 75
    }
  },
  collectCoverage: true,
  moduleNameMapper: {
    // Don't load files that Jest would not understand
    // can also map files that are loaded by webpack with the file-loader
  }
};
