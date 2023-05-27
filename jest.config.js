module.exports = {
  clearMocks: true,
  moduleFileExtensions: ['js', 'ts'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  verbose: true,
  // NOTE: Remove the "coverage" fields if you don't want to maintain testing thresholds
  collectCoverageFrom: ['<rootDir>/src/**/*{js,ts}'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  coverageReporters: ['json', 'lcov', 'text'],
};
