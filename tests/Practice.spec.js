import { test, expect } from '@playwright/test';

test('check box', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/#');

  const elements= page.locator("//div[@id='crosscol']//div/ul//a");
  await expect(elements).toHaveText(["Home","Udemy Courses","Online Trainings","Blog","PlaywrightPractice"]);
   
  const texts=await elements.allTextContents();
  console.log(texts);
  await expect(page.locator("//button[@name='start']")).toBeEnabled();
  const checkbox= page.locator("//input[@name='gender']").first();
await checkbox.click();
await expect(checkbox).toBeChecked();
//---------------Buil in locator----------------------
//await page.getByRole("textbox",{id:"name"}).fill("akshay");

await page.getByRole("checkbox",{name:"gender"}).click();

});