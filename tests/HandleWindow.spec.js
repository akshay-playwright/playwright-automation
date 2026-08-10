import { test, expect } from '@playwright/test';

test('check box', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  const [childPage] = await Promise.all([
    page.waitForEvent('popup'),
    page.click("//button[text()='New Tab']"),
  ]);
   const Title= await childPage.title();
   console.log(Title);



    page.on('dialog', async diaalog=>{
              const Massage= diaalog.message();
              console.log(Massage);
             await diaalog.accept();

    } );
    await page.locator("//button[text()='Simple Alert']").click();

    //----------------mouse over action-----------------------

   const point= page.locator("//button[text()='Point Me']");
    await point.hover();

    await page.waitForTimeout(5000);

   

    

  
     
     

});