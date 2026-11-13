import { test, expect } from "@playwright/test";

test.describe("Sitemap & Link Integrity", () => {
  test("Sitemap.xml contains valid indexable routes and all return 200 OK", async ({
    request,
    baseURL,
  }) => {
    const sitemapRes = await request.get("/sitemap.xml");
    expect(sitemapRes.status()).toBe(200);

    const sitemapText = await sitemapRes.text();
    const locMatches = sitemapText.match(/<loc>(.*?)<\/loc>/g) || [];
    expect(locMatches.length).toBeGreaterThanOrEqual(10);

    // Extract paths and verify each returns 200
    for (const locTag of locMatches) {
      const fullUrl = locTag.replace(/<\/?loc>/g, "").trim();
      const urlObj = new URL(fullUrl);
      const pathname = urlObj.pathname;

      // Request relative path on the test server
      const pageRes = await request.get(pathname);
      expect(
        pageRes.status(),
        `Expected 200 OK for sitemap route ${pathname}, but received ${pageRes.status()}`
      ).toBe(200);
    }
  });

  test("Robots.txt is accessible and serves canonical rules", async ({ request }) => {
    const robotsRes = await request.get("/robots.txt");
    expect(robotsRes.status()).toBe(200);
    const text = await robotsRes.text();
    expect(text).toContain("User-Agent: *");
    expect(text).toContain("Disallow: /api/");
    expect(text).toContain("Disallow: /dev/");
  });

  test("llms.txt provides AI crawler overview", async ({ request }) => {
    const llmsRes = await request.get("/llms.txt");
    expect(llmsRes.status()).toBe(200);
    const text = await llmsRes.text();
    expect(text).toContain("OCTACORE Fitness");
    expect(text).toContain("Nerul");
    expect(text).toContain("Airoli");
  });
});
