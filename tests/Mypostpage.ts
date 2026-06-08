import { expect, Page } from "@playwright/test";
import { BasePage } from "./Baseclass.ts";

export class MyPostsPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    private myPostsHeader = this.page.locator('(//a[@href="/profile?tabid=posts"])[1]');

    // private searchTextbox = this.page.getByPlaceholder('Search by Job title, Keyword...');

    // private clickonpost = this.page.locator('(//div[@class="bg-white rounded-xl border cursor-pointer hover:shadow-lg transition-shadow border-gray-200"])[1]');

    // // private compensationText = this.page.locator('COMPENSATION_TEXT');

    // private jobTypeText = this.page.locator('JOB_TYPE_TEXT');

    // private descriptionText = this.page.locator('DESCRIPTION_TEXT');

    // Filter

    private filterButton = this.page.locator('//span[@class="text-purpleBrand flex items-center gap-2"]');

    private filterFullTime = this.page.locator('//input[@value="fullTime"]');

    private applyButton = this.page.getByRole('button', { name: 'Apply' });

    private noResultText = this.page.getByText('No posts found');

    // async searchCreatedPost(title: string) {

    //     await this.click(this.myPostsHeader);

    //     await this.fill(this.searchTextbox, title);

    //     await this.click(this.clickonpost);
    // }

    // async verifyCreatedPost(description: string) {

    //     await expect(this.compensationText)
    //         .toContainText('₹112 - ₹223');

    //     await expect(this.jobTypeText)
    //         .toContainText('Full Time');

    //     await expect(this.descriptionText)
    //         .toContainText(description);
    // }

    async validateFilterBug() {

        await this.click(this.filterButton);

        await this.click(this.filterFullTime);

        await this.click(this.applyButton);

        if (await this.noResultText.isVisible()) {

            console.log(
                'BUG : Full Time Filter Not Working'
            );

            await this.takeScreenshot(
                'screenshots/filter-bug.png'
            );

            await expect.soft(
                this.noResultText
            ).toBeHidden();
        }
    }
}