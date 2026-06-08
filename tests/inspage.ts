import { Page } from "@playwright/test";
import { Baseclass } from "./Baseclass";

export class Purchase extends Baseclass{
    constructor(page:Page){
        super(page)
    }

    private purchasebutton = this.page.getByRole('link',{name: 'purchase'});
    private ordersbutton = this.page.getByRole('link',{name: 'Orders'});
    private newpurchasebutton = this.page.locator('#addNew_order');

    private selectsuplier = this.page.locator('#vendor_name')
    private invoice_bill = this.page.locator('#invoice_bill')
    private invoice_amt = this.page.locator('#invoice_amt')
    private productselect = this.page.locator('#product_name')
    private batch = this.page.locator('#batch')
    private exp_date = this.page.locator('#exp_date')
    
    
    async purchasing (){
        await this.purchasebutton.click();
        await this.ordersbutton.click();
        await this.newpurchasebutton.click();
        await this.selectsuplier.selectOption('SRI SARASWATHI AGENCY')
        await this.invoice_bill.fill('1000as')
        await this.invoice_amt.fill('1')
        await this.productselect.selectOption('MUPIKEM OINT 5GM')
        await this.batch.fill('09jiu')
        await this.exp_date.fill('a')
    }
}
