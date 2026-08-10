import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.google.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Google/);
  const Title=await page.title();
  console.log('Title:',Title);
    const URL= await page.url();
    console.log('URL:',URL);
     await expect(page).toHaveURL('https://www.google.com/');
     await page.locator("//textarea[@name='q']").fill("selenium");
     await page.locator("//textarea[@name='q']").press('Enter');
     const title1= await page.title();
     console.log('**********',title1);
    await expect(page).toHaveTitle(/search/);
    await page.goto('https://www.lagnasohalaa.com/');
   const home=await  page.locator("(//a[text()='Home'])[1]").textContent();
   console.log(home);
   await page.locator("(//a[text()='Register Now'])[1]").click();
   await page.locator("//input[@name='first_name']").fill("akshay");
   await page.locator("//input[@name='last_name']").fill("bhusari");
   await page.locator("//input[@name='email']").fill("bhusari");
   const name= await page.locator("//button[text()='Create Account']").textContent();
   console.log('name is',name);
       const Labels= await  page.locator("//div[@class='form-login']//label");
          const Count=await Labels.count();
          console.log(Count);
          for(let i=0;i<=Count-1;i++){
               const text= await Labels.nth(i).textContent();
               console.log(text);
          }
          await expect(page).toHaveTitle("Lagna Sohalaa Pvt Ltd");
          await expect(page).toHaveURL("https://www.lagnasohalaa.com/sign-up.html");
         const firstName= page.locator("(//div[@class='form-login']//label[@class='lb'])[1]");
         await expect(firstName).toBeVisible();
         await expect(firstName).toHaveText("First Name:");
          
            
});