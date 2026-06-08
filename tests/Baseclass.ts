import {Page} from '@playwright/test';

export class Baseclass{
    protected page:Page;

    constructor(page:Page){
        this.page=page;
    }

    async BaseURL(url:string){
        await this.page.goto(url);
    }

    async waitforload(){
        await this.page.waitForLoadState('load');
    }
}
 // new change