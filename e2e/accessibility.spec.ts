import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const keyRoutes = [
  "/",
  "/about",
  "/locations/nerul",
  "/locations/airoli",
  "/facilities",
  "/training",
  "/membership",
  "/transformations",
  "/contact",
];

test.describe("Accessibility Checks (axe-core)", () => {
  for (const route of keyRoutes) {
    test(`Axe WCAG 2.1 AA audit on "${route}"`, async ({ page }) => {
      await page.goto(route, { waitUntil: "domcontentloaded" });

      // Exclude third-party iframes (e.g. Google Maps iframe) from site accessibility scan
      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .exclude("iframe")
        .analyze();

      expect(
        accessibilityScanResults.violations,
        `Accessibility violations found on ${route}: ${JSON.stringify(
          accessibilityScanResults.violations.map((v) => ({
            id: v.id,
            description: v.description,
            nodes: v.nodes.length,
          })),
          null,
          2
        )}`
      ).toEqual([]);
    });
  }
});
