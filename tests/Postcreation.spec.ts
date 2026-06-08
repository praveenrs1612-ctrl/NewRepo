import { test } from '@playwright/test';
import { PostPage } from './Postpage.ts';
import { MyPostsPage } from './Mypostpage.ts';

test('Create Post And Validate Bugs', async ({ page }) => {

    const postPage = new PostPage(page);
    const myPostsPage = new MyPostsPage(page);

    const title =
        `Automation Post ${Date.now()}`;

    const description =
        'Playwright Automation Testing';

    await postPage.navigate(
        'https://tichi-app-webapp-stage.web.app/home'
    );

    await postPage.waitForPageLoad();

    // Create Post

    await postPage.createPost(
        title,
        description
    );


    await myPostsPage.validateFilterBug();
});