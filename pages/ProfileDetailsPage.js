class ProfileDetailsPage{

    constructor(page){
        this.page=page;
       this.details= page.locator("//h3[text()='Personal information']/following-sibling::ul//b");

          this.cancelButton=  page.locator("(//button[text()='Cancel'])[3]");
    }

    async getDetailsandVerify(){
        await this.details.first().waitFor({
        state: "visible",
        timeout: 30000
    });
      return await this.details.allInnerTexts();
   await expect(this.cancelButton).toBeVisible();
     await this.cancelButton.click();

    }
    async closeProfile() {
    //await expect(this.cancelButton).toBeVisible();
    await this.cancelButton.click();
}
}
export { ProfileDetailsPage };