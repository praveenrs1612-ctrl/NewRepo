import { expect, Page } from "@playwright/test";
import { BasePage } from "./Baseclass.ts";

export class PostPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    // Navigation
    private postMenu = this.page.getByRole('button', { name: 'Post' });
    private createPostBtn = this.page.getByRole('button', { name: 'Create Post' });

    // Form Fields
    private tichiTypeDropdown = this.page.locator('(//span[@class="text-gray-900"])[1]');
    private fullTimeOption = this.page.getByText('Full Time');

    private titleTextbox = this.page.getByPlaceholder('Enter the title');

    private areaOfInterestDropdown = this.page.locator('(//span[@class="text-gray-900"])[2]');
    private areaOption = this.page.getByText('Agriculture, Farm Work & Equipment');

    private descriptionTextbox = this.page.getByPlaceholder("Make life easy with Tichi! Describe your need. Hit 'AI Generate' for a standout title and interest in second. Keep content lawful; users are liable for offensive posts");

    private skillTextbox = this.page.getByPlaceholder('Select skills');
    // private addSkillButton = this.page.locator('ADD_SKILL_BUTTON');

    private locationDropdown = this.page.getByText('Select a location');
    private locationOption = this.page.getByText('Coimbatore, Tamil Nadu, India');

    private compensationTypeDropdown = this.page.locator('(//span[@class="text-gray-900"])[3]');
    private compensationTypeOption = this.page.getByText('Per Hour');

    private compensationMin = this.page.locator('(//input[@type="number"])[1]');
    private compensationMax = this.page.locator('(//input[@type="number"])[2]');

    // Upload
    private uploadButton = this.page.locator('File format: PNG, JPG, PDF (max 5mb)');
    private pickFromLibraryButton = this.page.getByText('Pick from Library');
    private imageSelect = this.page.locator('//img[@alt="Agriculture, Farm Work & Equipment"]');
    // private uploadErrorMessage = this.page.locator('UPLOAD_ERROR_MESSAGE');
    private closeButton = this.page.locator('//button[@class="text-gray-500 hover:text-gray-700 p-1 min-h-[32px] min-w-[32px] flex items-center justify-center"]');

    private createButton = this.page.getByText('Create Post');

    async createPost(title: string, description: string) {

        await this.click(this.postMenu);

        await this.click(this.createPostBtn);

        // Tichi Type
        await this.click(this.tichiTypeDropdown);
        await this.click(this.fullTimeOption);

        // Title
        await this.fill(this.titleTextbox, title);

        // Area of Interest
        await this.click(this.areaOfInterestDropdown);
        await this.click(this.areaOption);

        // Description
        await this.fill(this.descriptionTextbox, description);

        // Skills
        await this.fill(this.skillTextbox, 'Playwright');
        // await this.click(this.addSkillButton);
        await this.page.keyboard.press('Enter');

        await this.fill(this.skillTextbox, 'TypeScript');
        // await this.click(this.addSkillButton);
        await this.page.keyboard.press('Enter');

        await this.fill(this.skillTextbox, 'Automation');
        // await this.click(this.addSkillButton);
        await this.page.keyboard.press('Enter');

        // Location
        await this.click(this.locationDropdown);
        await this.click(this.locationOption);

        // Compensation Type
        await this.click(this.compensationTypeDropdown);
        await this.click(this.compensationTypeOption);

        // Compensation
        await this.fill(this.compensationMin, '112');
        await this.fill(this.compensationMax, '223');

        // Upload Bug Validation
        await this.validateImageUploadBug();

        // Create Post
        await this.click(this.createButton);

        await this.page.waitForTimeout(6000);
    }

    async validateImageUploadBug() {

        await this.click(this.uploadButton);

        await this.click(this.pickFromLibraryButton);

        await this.waitForPageLoad();

        await this.click(this.imageSelect);

        // if (await this.uploadErrorMessage.isVisible()) {

        //     console.log(
        //         'BUG-001 : failed to process the selected image'
        //     );

        //     await this.takeScreenshot(
        //         'screenshots/upload-image-bug.png'
        //     );

        //     await expect.soft(
        //         this.uploadErrorMessage
        //     ).toBeHidden();
        // }

        await this.click(this.closeButton);
        
    }
}