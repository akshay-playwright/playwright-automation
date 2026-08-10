import { expect } from '@playwright/test';
class RegisterPage{
/**
 * @param {import('@playwright/test').Page} page
 */

  constructor(page){
     this.page=page;
     this.firstName=page.getByPlaceholder("Enter your first name");
      this.lastName=page.getByPlaceholder("Enter your last name");
      this.genderDropdawn=page.locator("(//select[@class='chosen-select'])[1]");
     this.email=page.getByPlaceholder("Enter email");
     //Enter password
     this.mobileNumber=page.getByPlaceholder("Enter mobile number");
      this.onBehalf= page.locator("#on_behalf");
       this.password=page.getByPlaceholder("Enter password");
       this.confirmPssword=page.getByPlaceholder("Enter Confirm Password");
      this.invalidEmailError=  page.getByText("Invalid email address");
      this.mobileNumberError=page.getByText("Mobile must be exactly 10 digits");
      this.passwordError=page.getByText("Passwords must match");
  }

   async entreAllValue(first,last,email,mobile,pass,cpass){
           await this.firstName.fill(first);
           await this.lastName.fill(last);
           await this.email.fill(email);
           await this.mobileNumber.fill(mobile);
          
           await this.password.fill(pass);
           await this.confirmPssword.fill(cpass);
    }

   async  selectGender(){
         await this.genderDropdawn.selectOption({
            label:"Male"
         })
   }
   async  selectObehalf(){
         await this.onBehalf.selectOption({
            label:"Self"
         })
   }
   async verifyErrorMsg(){
   await expect(this.invalidEmailError).toBeVisible();
   await expect(this.mobileNumberError).toBeVisible();
    await expect(this.passwordError).toBeVisible();
   }

}
export { RegisterPage };