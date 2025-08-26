import { test, expect } from '@playwright/test';

test('has documents link', async ({ page, context }) => {
  await page.goto('/');

  const documentLink = await page.getByRole('link', { name: 'Read our docs' } )
  await expect(documentLink).toBeVisible();
  const pagePromise = context.waitForEvent('page');
  await documentLink.click();
  const newPage = await pagePromise;
  await expect(newPage).toHaveURL(/https:\/\/nextjs.org\/docs.*/);
});

test('has learn link', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('link', { name: 'Learn' } )).toBeVisible();
});
