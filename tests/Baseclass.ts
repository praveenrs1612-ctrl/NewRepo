import { Locator, Page } from "@playwright/test";

export class BasePage {

    constructor(protected page: Page) { }

    async navigate(url: string) {
        await this.page.goto(url);
    }

    async click(locator: Locator) {
        await locator.click();
    }

    async fill(locator: Locator, value: string) {
        await locator.fill(value);
    }

    async selectByText(locator: Locator, text: string) {
        await locator.selectOption({ label: text });
    }

    async waitForPageLoad() {
        await this.page.waitForLoadState('networkidle');
    }

    async takeScreenshot(path: string) {
        await this.page.screenshot({
            path,
            fullPage: true
        });
    }
}