import { test, expect } from '@playwright/test';

test('check box', async ({ page }) => {
  await page.goto('https://www.google.com/webhp');
   const title=await page.title();
   console.log(title);
    await expect(page).toHaveTitle("Google");
    await expect(page).toHaveURL(/google/);

  const search=  page.locator("//textarea[@class='gLFyf']");
  await expect(search).toBeEmpty();
    await expect(search).toBeVisible();
    const name=page.locator("//input[@class='gNO89b']").last();
      await expect(name).toHaveText("Google Search");
      await expect(name).toHaveValue("Google Search");
     const value=await name.inputValue();
     console.log(value);
       const value1=await  name.textContent();
       console.log(value1);
       const button= await page.locator("//input[@class='RNmpXc']").last();
         
       const text1=await button.inputValue()
       console.log(text1);
       
       await expect(button).toHaveValue("I'm Feeling Lucky");
      // await button.click();
       const About= await page.locator("//a[@class='w5hRs']").first().textContent();
       console.log(About);
      
      



});