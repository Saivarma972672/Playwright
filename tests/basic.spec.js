const { test, expect } = require('@playwright/test');

test('has title', async ({ page, browser }) => {
//     const context = await browser.newContext();
//     const newPage = await context.newPage();
//     await newPage.goto('https://www.instagram.com/');
//     await expect(newPage).toHaveTitle(/Instagram/);
//    await page.locator('(//input[@class="_aa4b _add6 _ac4d _ap35"])[1]').type("8688634410");
//    await page.waitForTimeout(50000);


await page.goto('https://www.instagram.com/');
await page.locator('(//input[@class="_aa4b _add6 _ac4d _ap35"])[1]').fill("8688634410");
await page.waitForTimeout(3000);

  });