import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect h1 to contain a substring.
  expect(await page.locator('h1').innerText()).toContain('Home');
});

test('has title products', async ({ page }) => {
  await page.goto('/products');

  // Expect h1 to contain a substring.
  expect(await page.locator('h1').innerText()).toContain('Products');
});

test('has title cart', async ({ page }) => {
  await page.goto('/cart');

  // Expect h1 to contain a substring.
  expect(await page.locator('h1').innerText()).toContain('Cart');
});
