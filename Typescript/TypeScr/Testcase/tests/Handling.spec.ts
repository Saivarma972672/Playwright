import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  // Navigate to Flipkart
  await page.goto('https://www.flipkart.com/');

  // Click on the login button
  await test.step('Click on login button', async () => {
    const loginButton = page.locator('//span[text()="Login"]');
    await loginButton.click();

    // Wait for the login form to be visible
    await expect(page.locator('//input[@class="r4vIwl BV+Dqf"]')).toBeVisible();
  });

  // Enter phone number
  await test.step('Enter phone number', async () => {
    await page.reload();
    const phoneNumberInput = page.locator('//input[@class="r4vIwl BV+Dqf"]');
    await phoneNumberInput.fill('8688634410');

    // Wait for the submit button to be enabled and visible
    const submitButton = page.locator('//button[@class="QqFHMw twnTnD _7Pd1Fp"]');
    await expect(submitButton).toBeVisible();
    await expect(submitButton).toBeEnabled();

    // Click on the submit button
    await submitButton.click();
    await page.waitForTimeout(3000);
    const enter = await page.locator('//div[@class="XDRRi5"]//input[@class="r4vIwl IX3CMV"]')
    await enter.fill('')
    await page.locator('//button[@class="QqFHMw llMuju M5XAsp"]').click()
  });
});