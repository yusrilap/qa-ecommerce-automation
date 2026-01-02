const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,

  expect: {
    timeout: 5 * 1000,
  },

  retries: process.env.CI ? 2 : 0,

  use: {
    actionTimeout: 10 * 1000,
    navigationTimeout: 15 * 1000,
    trace: 'on-first-retry',
  },
});
