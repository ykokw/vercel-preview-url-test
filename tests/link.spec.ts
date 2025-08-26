import { test, expect } from '@playwright/test';

test('has documents link', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('link', { name: 'Read our docs' } )).toBeVisible();
});

test('has learn link', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('link', { name: 'Learn' } )).toBeVisible();
});
