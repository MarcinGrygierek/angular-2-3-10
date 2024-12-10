import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    page.goto('/');

    const button = page.getByTestId('auth-button');
    const dataLink = page.getByTestId('data-link');
    const welcome = page.getByTestId('auth-info');

    await button.click();

    await expect(welcome).toBeVisible();

    await dataLink.click();
})

test.describe('Elements', () => {
    test('goes to data page', async ({ page }) => {
        await expect(page).toHaveURL('/data')
    })

    test('adds new element to the list', async ({ page }) => {
        const listElements = page.getByTestId('list-element');
        const button = page.getByTestId('action-button');

        await expect(listElements).toHaveCount(0);

        await button.click();

        await expect(listElements).toHaveCount(1);
    })
 })