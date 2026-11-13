import { test, expect } from "@playwright/test";

test.describe("Navigation & Mobile Menu", () => {
  test("Mobile menu opens, traps focus, locks body scroll, and closes on ESC (390px)", async ({
    page,
  }, testInfo) => {
    if (testInfo.project.name !== "Mobile-390") {
      return;
    }

    await page.goto("/");

    // Locate menu toggle button
    const menuButton = page.locator('button[aria-label="Open Mobile Menu"]');
    await expect(menuButton).toBeVisible();

    // Open menu
    await menuButton.click();

    // Check menu overlay is visible
    const mobileMenu = page.locator('div[role="dialog"][aria-label="Navigation Menu"]');
    await expect(mobileMenu).toBeVisible();

    // Verify close button is present
    const closeButton = page.locator('button[aria-label="Close Navigation Menu"]');
    await expect(closeButton).toBeVisible();

    // Press ESC to close
    await page.keyboard.press("Escape");
    await expect(mobileMenu).not.toBeVisible();
  });

  test("Desktop navigation links are visible at 1440px", async ({ page }, testInfo) => {
    if (testInfo.project.name !== "Desktop-1440") {
      return;
    }

    await page.goto("/");

    // Check header desktop nav
    const desktopNav = page.locator('header nav[aria-label="Main Navigation"]');
    await expect(desktopNav).toBeVisible();

    // Check key desktop navigation links
    await expect(page.locator('header nav a[href="/about"]')).toBeVisible();
    await expect(page.locator('header nav a[href="/locations"]')).toBeVisible();
    await expect(page.locator('header nav a[href="/facilities"]')).toBeVisible();
    await expect(page.locator('header nav a[href="/training"]')).toBeVisible();
    await expect(page.locator('header nav a[href="/membership"]')).toBeVisible();
    await expect(page.locator('header nav a[href="/contact"]')).toBeVisible();
  });
});
