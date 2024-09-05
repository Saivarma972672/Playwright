import {test, expect } from '@playwright/test';
test('Select Multiple Products', async ({ page }) => {
//counting number of rows in a table
await page.goto('https://datatables.net/extensions/fixedcolumns/examples/integration/select-checkbox.html')
const TableRows= await page.locator('tbody tr');
console.log("total no of rows"+await TableRows.count())
expect(await TableRows.count()).toBe(61)
await page.waitForTimeout(3000);
//filter checkbox and click on particular name of element
const rowWithBradleyLocator = TableRows.filter({
    hasText: 'Bradley' 
});
expect(await rowWithBradleyLocator.count()).toBeGreaterThan(0); 
// Interact with the checkbox in the filtered row
await rowWithBradleyLocator.locator('input[type="checkbox"]').check();
await page.waitForTimeout(3000);
    // List of products to select
    const productsToSelect = ['Bradley', 'John', 'Emily']; // Add names or text content as needed
    for (const product of productsToSelect) {
        // Filter rows by product name and check the checkbox
        const rowWithProductLocator1 = TableRows.filter({has: page.locator ('td'),
            hasText: product  //Filter rows that contain the specific product name
        });
    console.log("print given list items"+ await rowWithProductLocator1.count()) 
    await rowWithProductLocator1.locator('input[type="checkbox"]').check();
    await page.waitForTimeout(3000);
 }
});

