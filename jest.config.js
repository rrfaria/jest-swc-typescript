module.exports = {
  "collectCoverage": true,
  collectCoverageFrom: [
    "src/**/*.{ts,js,tsx,jsx}",
    "!**/node_modules/",
  ],
  "coverageThreshold": {
    "global": {
      "lines": 90,
      "statements": 90
    }
  },
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
  testEnvironment: 'node',
};