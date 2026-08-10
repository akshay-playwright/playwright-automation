import { test, expect } from '@playwright/test';

test('check box', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

 const firstname= page.locator("//input[@id='name']");
    await  firstname.fill("akshay");
   const inputvalue= await firstname.inputValue();
   console.log(inputvalue); 

  const list= page.locator("//div[@class='widget-content']//li/a");
    await list.first().waitFor();
  for(let i=0;i<=await list.count()-1;i++){
   const text= await list.nth(i).textContent();
   console.log(text);
  }

  page.on('dialog', async dialog=>{
    const text= dialog.message();
    console.log(text);
    await dialog.accept();
  });

 await  page.locator("//button[@id='alertBtn']").click();



    

});