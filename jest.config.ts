import type { Config } from "jest";

const configuration: Config = {
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/styleMock.ts",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.ts",
  },
  testEnvironment: "jsdom",
};

export default configuration;
