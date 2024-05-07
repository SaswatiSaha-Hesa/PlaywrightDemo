const {test, expect} = require('@playwright/test');

test.skip('First Test' , async ({page}) =>{

    await page.goto('https://practice.expandtesting.com/login');
    await page.locator('#username').fill('practice');
    await page.locator('#password').fill('SuperSecretPassword!');
    await page.getByRole('button').filter({ hasText: /Login/}).click();
    const successMessage = page.locator('.alert-success');
    await expect(successMessage).toBeVisible();

})

test('test', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/login');
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('practice');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('SuperSecretPassword!');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('You logged into a secure area!')).toBeVisible();
  });