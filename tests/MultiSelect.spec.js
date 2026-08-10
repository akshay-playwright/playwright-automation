
import { test, expect } from '@playwright/test';

test('check box', async ({ page }) => {
  await page.goto('https://www.google.com/webhp');
      await  page.locator("//textarea[@name='q']").fill("playwrite");
        
     const suggestion=   page.locator("(//ul[@jsname='bw4e9b'])[1]//li");
     await suggestion.first().waitFor();
     const Count=  await  suggestion.count();
      console.log(Count);
     for(let i=0;i<=Count-1;i++){
        const text= await suggestion.nth(i).innerText();
        console.log(text);
        if(text.includes("playwright")){
            await suggestion.nth(i).click();
            break;
        }
        
     }
    // await expect(page).toHaveTitle(/playwright documentation - Google Search/);
   const Title= await page.title();
   console.log(Title);


});