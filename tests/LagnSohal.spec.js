import { test, expect } from '@playwright/test';

test('practice', async ({ page }) => {
  await page.goto('https://www.lagnasohalaa.com');
  

   const links=  page.locator("//div[@class='bl']//li/a");
   await links.first().waitFor();

   const count=await  links.count();

   for(let i=0;i<=count-1;i++){
      const text= await links.nth(i).textContent();
      console.log(text);
   }
   //
   //await page.locator("//div[@class='bl']//li//a[text()='Login']").click();

   page.locator("//select[@name='gender']").selectOption({
    label:"Male"
   })
  //await  page.pause();
   await expect(page.locator("//select[@name='gender']")).toHaveValue("1");

   page.locator("//select[@name='age_range']").selectOption({
    index:1
   });

   page.locator("//select[@name='religion']").selectOption({
    label:"Hinduism"
   });

   page.locator("//select[@name='language']").selectOption({
    value:"1"
   })

   await page.pause();

});