import { test, expect } from "@playwright/test";

test.describe("Enquiry Form Pipeline", () => {
  test("Validates required fields and invalid mobile numbers", async ({ page }) => {
    await page.goto("/contact");

    // Attempt submission with empty form
    const submitButton = page.locator('button[type="submit"]:has-text("Submit Enquiry")');
    await expect(submitButton).toBeVisible();
    await submitButton.click();

    // Verify validation errors appear
    const nameError = page.locator("#fullName-error");
    await expect(nameError).toBeVisible();

    const mobileError = page.locator("#mobileNumber-error");
    await expect(mobileError).toBeVisible();

    // Fill invalid mobile number
    const mobileInput = page.locator("input#mobileNumber");
    await mobileInput.fill("12345");
    await submitButton.click();
    await expect(mobileError).toBeVisible();
    await expect(mobileError).toContainText(/10-digit/i);
  });

  test("Successfully submits enquiry with mocked API & Turnstile and shows WhatsApp follow-up", async ({
    page,
  }) => {
    // Intercept and mock the /api/lead route handler
    await page.route("**/api/lead", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          success: true,
          message: "Your enquiry has been received by the Nerul desk.",
          leadId: "TEST-LEAD-999",
        }),
      });
    });

    await page.goto("/contact");

    // Fill valid data
    await page.locator("input#fullName").fill("Vikram Malhotra");
    await page.locator("input#mobileNumber").fill("9820112345");

    // Toggle consent checkbox
    const consentCheckbox = page.locator('input[type="checkbox"]');
    await consentCheckbox.check();

    // Submit form
    const submitButton = page.locator('button[type="submit"]:has-text("Submit Enquiry")');
    await submitButton.click();

    // Assert success screen appears
    const successHeading = page.locator('h3:has-text("WELCOME TO THE BROTHERHOOD")');
    await expect(successHeading).toBeVisible({ timeout: 10000 });

    // Assert WhatsApp direct follow-up button is visible
    const whatsappButton = page.locator('a:has-text("Chat On WhatsApp Now")');
    await expect(whatsappButton).toBeVisible();
    await expect(whatsappButton).toHaveAttribute("href", /wa\.me/);
  });
});
