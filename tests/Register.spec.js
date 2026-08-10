import { test, expect } from '@playwright/test';
const dataset = require("../testdata/loginData.json");

import { RegisterPage } from '../pages/RegisterPage'; 
import { LoginPage } from '../pages/LoginPage'; 
import { HomePage } from '../pages/HomePage';

test('Register', async ({ page }) => {
  const rigister=new RegisterPage(page);
  const login=new LoginPage(page);
  const home=new HomePage(page);
 await login.goto();
 await home.selectRegisterLink();
 await rigister.entreAllValue("asdff","kjhhg","123gmail.com","526662","1234ggd","12ggd");
  await rigister.selectGender();
  await rigister.selectObehalf();
  await rigister.verifyErrorMsg();
  await page.pause();

});
test('search profile', async ({ page }) => {
    const login=new LoginPage(page);
     const home=new HomePage(page);
    login.goto();
    login.entereCredential(dataset.username,dataset.password);
    home.ageDropDwn();


});