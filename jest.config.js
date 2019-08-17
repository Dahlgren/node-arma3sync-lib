module.exports = {
  "roots": [
    "<rootDir>",
    "."
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testEnvironment": "node",
  "moduleNameMapper": {
    "src/(.*)": "<rootDir>/src/$1"
  }
};
