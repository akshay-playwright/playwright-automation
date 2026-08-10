//import { DropdownUtils } from '../util/DropDawnUtil.js';
class MemberPage{


    constructor(page){
        this.page=page;
       this.names= page.locator("//div[@class='pro-detail']//h4/a");
       this.selectMember=page.locator("(//div[@style='height: auto; overflow: auto;']//div[@class='pro-img gray-border']/a/img)[1]");


    }

   async getText()
   {
     await this.page.waitForSelector("//div[@class='pro-detail']//h4/a", {
        state: "visible",
        timeout: 30000
    });
      const count= await this. names.count();
      console.log("Count =", count);
     
      for(let i=0;i<=count-1;i++){
           const text= await this.names.nth(i).textContent();
           console.log(text);
      }
    }
    async selectMemberFirst(){
     await this.selectMember.click();
    }
}
export { MemberPage };