import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.testmuai.com/selenium-playground/select-dropdown-demo/');
  await page.getByRole('link', { name: 'Select Dropdown List' }).click();
  await page.locator('#select-demo').selectOption('Friday');
  await expect(page.getByText('Day selected :- Friday')).toBeVisible();
  await page.getByText('Day selected :- Friday').click();
  await expect(page.getByText('Day selected :- Friday')).toBeVisible();
  await page.locator('#multi-select').selectOption('California');
  await page.locator('#multi-select').selectOption('Texas');
  await page.getByRole('button', { name: 'First Selected' }).click();
  await expect(page.getByText('First selected option is :')).toBeVisible();
  await page.getByRole('button', { name: 'Get Last Selected' }).click();
  await expect(page.getByText('Texas').nth(2)).toBeVisible();
  
});