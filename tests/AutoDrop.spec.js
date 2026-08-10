import { test, expect } from '@playwright/test';

test('check box', async ({ page }) => {
  await page.goto('https://www.google.com');
    const search= page.locator("//textarea[@class='gLFyf']");
      await search.fill("selenium");
   
     const names=await page.locator("//ul[@class='G43f7e']//li");
         await names.first().waitFor();
     for(let i=0;i<=await names.count()-1;i++){
       const text=await names.nth(i).innerText();
       if(text.includes("selenium webdriver")){
        await names.nth(i).click();
        break;
       }
     }
     
     await page.pause();
       

     


});