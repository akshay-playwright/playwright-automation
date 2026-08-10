import { test, expect } from '@playwright/test';

test('check box', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
 const dropdawn= page.locator("//select[@id='country']");
  await  dropdawn.selectOption({label:"Japan"});
 await expect(dropdawn).toHaveValue("japan");//check attribute value
     const value= await dropdawn.inputValue();//return the value attribute
     console.log(value);
      const Value=await dropdawn.locator("option:checked").textContent();//return exat input value
      console.log(Value);
        await page.goto("https://www.lagnasohalaa.com/about.html");
       await page.locator("(//a[text()='Register Now'])[1]").click();
       const select= page.locator("//select[@name='on_behalf']");
      await select.selectOption({label:"Sister"});
      const name=await select.inputValue();
      console.log(name);
      const nmae1=await select.locator("option:checked").textContent();
      console.log(nmae1);
      // page taking time to load exceeding limit 3000




});