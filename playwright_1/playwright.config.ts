import { chromium, defineConfig, devices } from '@playwright/test';

import dotenv from 'dotenv';
// import path from 'path';
const envName = process.env.ENV || 'qa';
dotenv.config({path: `./env/.env.${envName}`});

export default defineConfig({

  //repeatEach:3,


   // (Default: 30000ms)
  timeout: 30_000, 

  //(Default: 0 )
  //globalTimeout: 300_000, 

  //(Default: 5000ms)
  // expect: {
  //   timeout: 10_000,
  // },

  testDir: './tests',
  fullyParallel: true,
  //forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 4,
   reporter: [
    ['html',{open:"never"}],
    ['allure-playwright']
  ],
  //testMatch:['tests/Leaf-ground/DragTo.spec.ts'],
  use: {

    // browserName= 'chromium',
     //headless: false,
    // baseURL: 'http://localhost:3000',

    trace: 'on',
    video:'on',
  },

  projects: [  
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run sta  rt',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
