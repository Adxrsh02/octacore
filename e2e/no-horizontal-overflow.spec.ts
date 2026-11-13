import { test, expect } from "@playwright/test";

const routes = [
  "/",
  "/about",
  "/locations",
  "/locations/nerul",
  "/locations/airoli",
  "/facilities",
  "/training",
  "/membership",
  "/transformations",
  "/contact",
  "/privacy-policy",
  "/terms",
];

test.describe("Responsive Layout & No Horizontal Overflow", () => {
  for (const route of routes) {
    test(`Route "${route}" has zero horizontal overflow`, async ({ page }) => {
      await page.goto(route, { waitUntil: "domcontentloaded" });

      // Measure document scrollWidth vs clientWidth
      const overflow = await page.evaluate(() => {
        const docWidth = document.documentElement.clientWidth;
        const scrollWidth = document.documentElement.scrollWidth;
        const bodyScrollWidth = document.body.scrollWidth;
        return {
          clientWidth: docWidth,
          docScrollWidth: scrollWidth,
          bodyScrollWidth: bodyScrollWidth,
          hasOverflow: scrollWidth > docWidth || bodyScrollWidth > docWidth,
        };
      });

      expect(
        overflow.hasOverflow,
        `Horizontal overflow detected on ${route}: clientWidth=${overflow.clientWidth}, docScrollWidth=${overflow.docScrollWidth}, bodyScrollWidth=${overflow.bodyScrollWidth}`
      ).toBe(false);
    });
  }
});
