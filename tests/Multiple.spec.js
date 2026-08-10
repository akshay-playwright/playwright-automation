import { test, expect } from '@playwright/test';

test('practice', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com');

  const checkboxes= await page.locator("//label[@class='form-check-label']").all();

  for(const checkbox of checkboxes){
     // await checkbox.click();
      const names=await  checkbox.textContent();
       if(names.includes("Male")){
         await  checkbox.click();
       }
  }
 await page.locator("//select[@id='country']").selectOption({
    label:"Australia"
 
 });

  const texts=await page.locator("//select[@id='country']//option").all()
  for(const text of texts){
    console.log(await text.innerText());

  }

  await page.locator("//select[@id='colors']").selectOption([
    "red",
    "blue",
    "green"
  ])


});