import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest/presets/js-with-ts", // ✅ permite JSX com TypeScript
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // ✅ transforma arquivos TSX
  },
};

export default config;
