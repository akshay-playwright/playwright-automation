import { test, expect } from '@playwright/test';

test('check box', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByPlaceholder("Enter Name").fill("akshay");
  await page.getByPlaceholder("Enter EMail").fill("Bhusari");
  await page.getByPlaceholder("Enter Phone").fill("an2gmail.com");
  await  page.locator("//input[@id='male']").click();

    const dropdawn=await page.locator("//select[@id='country']");
   await  dropdawn.selectOption({
        label:"India"
    });
     await expect(dropdawn).toHaveValue('india');

     await dropdawn.selectOption({
        index:2
     });
    const name=await dropdawn.inputValue();
    console.log(name);


  




});