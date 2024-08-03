module.exports = {
  testEnvironment: 'node',
  collectCoverageFrom: [
    'src/**/service.js',
    'src/**/validator.js',
    '!src/**/repository.js',
    '!src/**/routes.js',
    '!src/**/controller.js',
    '!src/config/*',
    '!src/database/*',
    '!src/middlewares/*',
    '!src/exceptions/*',
    '!src/*'
  ],
  coverageThreshold: {
    './src/': {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  },
  moduleDirectories: ['node_modules', 'src'],
  modulePathIgnorePatterns: [],
  testPathIgnorePatterns: ['<rootDir>/node_modules/']
};
