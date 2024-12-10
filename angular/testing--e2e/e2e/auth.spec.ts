import { test, expect } from "@playwright/test";

test.describe('Auth', () => {
    test('opens main page', async ({ page }) => {
        await page.goto('/');

        const header = page.getByTestId('app-title');
        expect(header).toBeVisible();
        expect(header).toHaveText('Test App');
    })

    test('clicks login button and sees welcome message', async ({ page }) => {
        await page.goto('/');

        const welcome = page.getByTestId('auth-info');
        const button = page.getByTestId('auth-button');

        await expect(welcome).not.toBeVisible();

        await button.click();

        await expect(welcome).toBeVisible();
    })
})