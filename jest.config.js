module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['<rootDir>/setupJest.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(mirador|@mui|dnd-core|@react-dnd|react-dnd)/)'
  ],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/__tests__/test-utils.js'],
};