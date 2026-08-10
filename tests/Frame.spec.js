import { test, expect } from '@playwright/test';

test('check box', async ({ page }) => {
  await page.goto('https://www.lagnasohalaa.com');

  const page2 = await page.context().newPage();
  await page2.goto('https://google.com');

  console.log(await page.title());   // Example
  console.log(await page2.title());  // Google

   const page3= await page.context().newPage();
   await page3.goto("https://playwright.com")
   console.log(await page3.title());

});