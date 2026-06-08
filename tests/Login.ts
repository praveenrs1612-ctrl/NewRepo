import { expect, Page } from  "@playwright/test";
import { Baseclass } from './Baseclass';

export class Login extends Baseclass{
    constructor(page:Page){
        super(page)
    }

    private Username = this.page.locator('#username');
    private Password = this.page.locator('#password');
    private loginbutton = this.page.locator('#loginbtn');

    private products= this.page.locator('.product-name');
    private productcount = this.page.locator("//tbody[@id='myTable']/tr/td[2]");


    async loginaction(username:string,password:string){
        await this.Username.fill(username);
        await this.Password.fill(password);
        await this.loginbutton.click();
        await expect(this.page).toHaveURL('https://medi.nigsoft.com/users/billdashboard.php')
    }

}
