# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test-1.spec.ts >> test
- Location: playwright_1\tests\test-1.spec.ts:3:1

# Error details

```
Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://www.testmuai.com/selenium-playground/
Call log:
  - navigating to "https://www.testmuai.com/selenium-playground/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e5]:
    - heading "Press space to play" [level=1] [ref=e6]
    - generic [ref=e7]:
      - paragraph [ref=e8]: "Try:"
      - list [ref=e9]:
        - listitem [ref=e10]: Checking the network cables, modem, and router
        - listitem [ref=e11]: Reconnecting to Wi-Fi
        - listitem [ref=e12]:
          - link "Running Windows Network Diagnostics" [ref=e13] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
    - generic [ref=e14]: ERR_INTERNET_DISCONNECTED
  - application "Dino game, press space to play" [ref=e16]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('test', async ({ page }) => {
> 4  |   await page.goto('https://www.testmuai.com/selenium-playground/');
     |              ^ Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://www.testmuai.com/selenium-playground/
  5  |   await page.getByRole('link', { name: 'Select Dropdown List' }).click();
  6  |   await page.locator('#select-demo').selectOption('Friday');
  7  |   await expect(page.getByText('Day selected :- Friday')).toBeVisible();
  8  |   await page.getByText('Day selected :- Friday').click();
  9  |   await expect(page.getByText('Day selected :- Friday')).toBeVisible();
  10 |   await page.locator('#multi-select').selectOption('California');
  11 |   await page.locator('#multi-select').selectOption('Texas');
  12 |   await page.getByRole('button', { name: 'First Selected' }).click();
  13 |   await expect(page.getByText('First selected option is :')).toBeVisible();
  14 |   await page.getByRole('button', { name: 'Get Last Selected' }).click();
  15 |   await expect(page.getByText('Texas').nth(2)).toBeVisible();
  16 |   
  17 | });
```