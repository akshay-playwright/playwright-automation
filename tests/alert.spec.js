import { test, expect } from '@playwright/test';

test('check box', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com');

    await page.locator("//a[text()='JavaScript Alerts']").click();
    page.once('dialog',async dialog=>{
           const text=   dialog.message();
           console.log(text);
           dialog.accept();
    })

   await page.locator("//button[text()='Click for JS Alert']").click();

   page.once('dialog',async dialog=>{
     await dialog.accept("akshay")
   })
 await page.locator("//button[text()='Click for JS Prompt']").click();

 await page.pause();



});