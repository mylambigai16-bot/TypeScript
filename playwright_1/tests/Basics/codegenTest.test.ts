import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await expect(page.getByRole('heading', { name: 'This is where you can log' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  await page.getByRole('button', { name: ' Login' }).click();
  await expect(page.locator('h2')).toContainText('Secure Area');
  await expect(page.locator('#content')).toContainText('Logout');
  await page.getByRole('link', { name: 'Logout' }).click();
  await expect(page.locator('h2')).toContainText('Login Page');
  await expect(page.getByRole('heading', { name: 'Login Page' })).toBeVisible();
  await expect(page.locator('h2')).toMatchAriaSnapshot(`- heading "Login Page" [level=2]`);
});