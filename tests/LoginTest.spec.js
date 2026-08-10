import { test, expect } from '../util/baseTest';
import { MemberPage } from '../pages/MemberPage';   
import { ProfileDetailsPage } from '../pages/ProfileDetailsPage';
const dataset = JSON.parse(JSON.stringify(require("../testdata/loginData.json")));

test('Verify user login', async ({ page,loginPage, homePage }) => {
 
 await loginPage.goto();
 await loginPage.entereCredential(dataset.username,dataset.password);
 await expect(loginPage.page).toHaveTitle(/Lagna/);
 await expect(loginPage.page).toHaveURL("https://www.lagnasohalaa.com/index.html");

 await homePage.veryfyLinks();
 await homePage.selectValueFromAgeDroDwan();
 await homePage.selectVlaueFromMarital();
 await homePage.selectVlaueRelgion();
 await homePage.selectLangauge();
 await homePage.selectSearchButton()
 const member=new MemberPage(page);
 await member.getText();
 await member.selectMemberFirst();
 const details=new ProfileDetailsPage(page);
 const alldetails=await details.getDetailsandVerify();
 console.log(alldetails);
   await expect(details.cancelButton).toBeVisible();
 await details.closeProfile();
 await page.pause();

 

});