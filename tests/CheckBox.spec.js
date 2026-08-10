import { test, expect } from '@playwright/test';

test('check box', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
   const Sunday= page.locator("//input[@id='sunday']");
   const Monday= page.locator("//input[@id='monday']");
   const Tuesday= page.locator("//input[@id='tuesday']");
   const weeks=[Sunday,Monday,Tuesday];

   for(const week of weeks){
       await week.check();
       await week.isChecked();
       await week.uncheck();
   }
  // await page.locator("//input[@type='checkbox']").first().check();
  // await page.locator("//input[@type='checkbox']").last().check();
  //  await page.locator("//input[@type='checkbox']").nth(2).check();

    const checkboxes= page.locator("//input[@type='checkbox']");
    for(let i=0;i<=checkboxes.count-1;i++){
        await checkboxes.check();
        await expect(checkboxes).toBeChecked();
    }
    

  
});