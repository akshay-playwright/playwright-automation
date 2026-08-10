import { test, expect } from '@playwright/test';

test('WebTable', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
    const Table= page.locator("//table[@name='BookTable']/tbody/tr");
     const rowcount=  await Table.count();
     console.log(rowcount);
     for(let i=0;i<=rowcount-1;i++){
       const cell=  Table.nth(i).locator("td");
       const cellcount=    await cell.count();
       for(let j=0;j<=cellcount-1;j++){
       const text= await cell.nth(j).innerText();
       console.log(text);
       }
     }
     const header=page.locator("//table[@name='BookTable']//tbody//tr/th");
      const text= await header.allInnerTexts();
      console.log(text);
    

});