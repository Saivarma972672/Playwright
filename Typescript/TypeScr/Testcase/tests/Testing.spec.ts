import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
await page.goto('https://www.techlistic.com/2017/02/automate-demo-web-table-with-selenium.html');
 const SS= await page.locator('//span[text()="Shanghai"]')
 expect(SS).toBeTruthy(); 
 await page.waitForTimeout(1000);
const AA= await page.locator('(//tr[@class="odd"]/td//span)[09]')
const BB= await page.locator('(//tr[@class="odd"]/td//span)[10]')
expect(BB).toBeTruthy();
if(AA==BB)
{
console.log("AA =BB is matching");
}
else
{
  console.log("AA =BB is not  matching");
}
if(await AA.isVisible())
{
   await page.waitForTimeout(1000);
expect(AA).toBeTruthy();
}
else{
  await page.waitForTimeout(1000);
  expect(AA).toBeFalsy();
}
});
