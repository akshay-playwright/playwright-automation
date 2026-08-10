import { test, expect } from '@playwright/test';

test('check box', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
   //  const popupPromise = page.waitForEvent('popup');
   //  await page.locator("//button[text()='New Tab']").click();
    // const childPage = await popupPromise;
   // const name= await childPage.locator("//h2[text()='Search This Blog']").textContent();
   // console.log(name);
    const page2= page.waitForEvent("popup");
    await page.locator("//button[text()='New Tab']").click();

    const nepage= await page2;
    const name= await nepage.locator("//h2[text()='Search This Blog']").textContent();
    console.log(name);
   const dropdawn= page.locator("//select[@id='country']");
     await dropdawn.selectOption({label:"India"});
    await expect(dropdawn).toHaveValue("india");
    await dropdawn.selectOption({label:"Japan"});
    await expect(dropdawn).toHaveValue("japan");
   const allvalues= page.locator("//select[@id='country']/option");
   for(let i=0;i<=allvalues.count-1;i++){
   const name= allvalues.nth(i).textContent();
   console.log("names:"+ name);
   }
    
       
});