import { test, expect } from '@playwright/test';

test('Practice1', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
 const checkboxes=page.locator("//div[@class='form-group']//div//label");
   const Count= await checkboxes.count();

    for(let i=0;i<=Count-1;i++){
      const text= await checkboxes.nth(i).textContent();

      if(text==="Sunday"){
        await checkboxes.nth(i).click();
        break;
      }

    }

   const sunday= page.locator("//input[@id='sunday']");
   await expect(sunday).toBeChecked();
  




})