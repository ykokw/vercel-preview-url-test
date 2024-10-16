import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Create Next App/);
});

test('has documents link', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('link', { name: 'Read our docs' } )).toBeVisible();
});
