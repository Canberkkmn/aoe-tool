export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "babel-jest",
  },
  coverageReporters: ["lcov", "text"],
};
