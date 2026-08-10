import { test, expect } from '@playwright/test';

test('practice', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com');

    await  page.locator("//input[@id='name']").fill("akshay");
    await   page.locator("//input[@id='email']").fill("gmail.com");

    page.on('dialog',async dialog=>{
          console.log(dialog.message());
          await dialog.accept("hello")
    });

     await page.locator("//button[text()='Prompt Alert']").click();

     const [newpage] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator("//button[text()='Popup Windows']").click(),
      ]);

     const title= await newpage.title();
     console.log(title);







});