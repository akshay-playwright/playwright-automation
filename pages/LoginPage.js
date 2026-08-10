
class LoginPage{

constructor(page){
   this.page=page;

    this.username=   page.locator("//input[@name='username']");
    this.password=page.locator("//input[@name='password']")
    this.clickButton=page.locator("//button[text()='Sign In']");
     this.loginbutton= page.locator("//div[@class='bl']//li/a[text()='Login']");

}
 async goto() {
    await this.page.goto("https://www.lagnasohalaa.com", {
        waitUntil: "domcontentloaded"
    });
}

 async entereCredential(userName,passWord){
    await this.loginbutton.click();
    await this.username.fill(userName);
    await this.password.fill(passWord);
    await this.clickButton.click();

 }
}
export { LoginPage };