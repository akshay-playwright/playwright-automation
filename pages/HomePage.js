import { expect } from '@playwright/test';
class HomePage{

constructor(page){
    this.page=page;
    this.homeLink=page.locator("//div[@class='bl']//a[text()='Home']");
    
    this.aboutLink=page.locator("//div[@class='bl']//a[text()='About']");

    this.logoutLink=page.locator("//div[@class='bl']//a[text()='Logout']");
      this.ageDropDwn= page.locator("//select[@name='age_range']");
      this.maritalStatusDrop=  page.locator("//select[@name='marital_status']");
       this.relgionDropDawn=  page.locator("//select[@name='religion']");  
       
       this.languageDropDawn=  page.locator("//select[@name='language']");
       this.searchButton=  page.locator("//button[text()='Search']");
        this.registerPageLink= page.locator("(//a[text()='Register Now'])[1]");
      
}

   async veryfyLinks(){
    await expect(this.page).toHaveTitle("Lagna Sohalaa Pvt Ltd");
     await expect(this.page).toHaveURL("https://www.lagnasohalaa.com/index.html");
  await expect(this.homeLink).toBeVisible();
  await expect(this.aboutLink).toBeVisible();
  await expect(this.logoutLink).toBeVisible();
    await  expect(this.ageDropDwn).toBeVisible();
     await  expect(this.maritalStatusDrop).toBeVisible();
      await  expect(this.relgionDropDawn).toBeVisible();
       await  expect(this.languageDropDawn).toBeVisible();
        await  expect(this.searchButton).toBeEnabled();
}

 
      
async selectValueFromAgeDroDwan()
       {
           await this.ageDropDwn.selectOption({
            label:"18 to 30"
           })
           await expect(this.ageDropDwn).toHaveValue("18-30");
        }

       async selectVlaueFromMarital(){
            await this.maritalStatusDrop.selectOption({
                label:"Never Married"
            })
            await expect(this.maritalStatusDrop).toHaveValue("1");
        }
        async selectVlaueRelgion(){
            await this. relgionDropDawn.selectOption({
                label:"Hinduism"
            })
             await expect(this.relgionDropDawn).toHaveValue("4");
        }
       async selectLangauge(){
         await this.languageDropDawn.selectOption({
            label:"Marathi"
         })
         //await this.searchButton.click();
       }
       async selectSearchButton(){
        await this.searchButton.click();
       }

       async selectRegisterLink(){
          await this.registerPageLink.click();
       }

}
export { HomePage };