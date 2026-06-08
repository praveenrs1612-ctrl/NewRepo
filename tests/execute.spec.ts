import test, { Page } from '@playwright/test';
import { Login } from './Login.ts';
import { Purchase } from './inspage.ts';

test('Loging to the application',async ({page})=>
{
    test.setTimeout(90000);   
    const Loginobj= new Login(page)
    // Loginobj.loginaction
    await Loginobj.BaseURL('https://medi.nigsoft.com/');
    await Loginobj.waitforload();
    await Loginobj.loginaction('praveenrs1612@gmail.com','123456');

    await Loginobj.waitforload();
    const purchaseobj = new Purchase(page)
    await purchaseobj.purchasing();
})


// test('Login with data driven',async({page})=>
// {
//     test.setTimeout(90000);
//     const Loginwithdatasobj = new Loginwithdatas(page);
//     await Loginwithdatasobj.loginwithdatas();
// })



