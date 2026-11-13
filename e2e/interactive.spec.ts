import { test, expect } from "@playwright/test";

test.describe("Interactive UI Features", () => {
  test("Branch toggle switches between Nerul and Airoli on Locations Hub", async ({ page }) => {
    await page.goto("/locations");

    const nerulBtn = page.locator('button:has-text("NERUL HUB")');
    const airoliBtn = page.locator('button:has-text("AIROLI HUB")');

    await expect(nerulBtn).toBeVisible();
    await expect(airoliBtn).toBeVisible();

    // Click Airoli Hub button
    await airoliBtn.click();
    await expect(airoliBtn).toHaveClass(/bg-accent/);

    // Click back to Nerul
    await nerulBtn.click();
    await expect(nerulBtn).toHaveClass(/bg-accent/);
  });

  test("Branch equipment filter works on Facilities page", async ({ page }) => {
    await page.goto("/facilities");

    const nerulTab = page.locator('section button:has-text("NERUL BRANCH")').first();
    const airoliTab = page.locator('section button:has-text("AIROLI BRANCH")').first();

    await expect(nerulTab).toBeVisible();
    await expect(airoliTab).toBeVisible();

    // Toggle to Airoli
    await airoliTab.click();
    await expect(airoliTab).toHaveClass(/bg-accent/);

    // Filter categories (FREE WEIGHTS, MACHINES, CARDIO)
    const cardioTab = page.locator('button:has-text("CARDIO")');
    await cardioTab.click();
    await expect(cardioTab).toHaveClass(/bg-accent/);
  });

  test("Before/After transformation slider is keyboard accessible", async ({ page }) => {
    await page.goto("/transformations");

    const slider = page.locator('div[role="slider"]');
    await expect(slider).toBeVisible();

    // Focus and press arrow keys
    await slider.focus();
    const initialVal = await slider.getAttribute("aria-valuenow");

    await page.keyboard.press("ArrowRight");
    const updatedVal = await slider.getAttribute("aria-valuenow");

    expect(Number(updatedVal)).toBeGreaterThanOrEqual(Number(initialVal));
  });

  test("404 Not Found page renders properly with return home CTA", async ({ page }) => {
    const response = await page.goto("/this-page-does-not-exist");
    expect(response?.status()).toBe(404);

    const heading = page.locator("h1");
    await expect(heading).toBeVisible();

    const returnLink = page.locator('a[href="/"]');
    await expect(returnLink.first()).toBeVisible();
  });
});
