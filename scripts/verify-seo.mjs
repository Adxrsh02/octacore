import fs from 'node:fs';
import path from 'node:path';

const htmlDir = path.resolve('.next/server/app');

const files = [
  { name: 'Home', file: 'index.html' },
  { name: 'About', file: 'about.html' },
  { name: 'Contact', file: 'contact.html' },
  { name: 'Facilities', file: 'facilities.html' },
  { name: 'Locations Hub', file: 'locations.html' },
  { name: 'Nerul Branch', file: 'locations/nerul.html' },
  { name: 'Airoli Branch', file: 'locations/airoli.html' },
  { name: 'Membership', file: 'membership.html' },
  { name: 'Training', file: 'training.html' },
  { name: 'Transformations', file: 'transformations.html' },
  { name: 'Privacy Policy', file: 'privacy-policy.html' },
  { name: 'Terms', file: 'terms.html' },
];

console.log('====================================================');
console.log('OCTACORE FITNESS — TECHNICAL SEO & SCHEMA AUDIT');
console.log('====================================================\n');

let totalErrors = 0;

for (const { name, file } of files) {
  const filePath = path.join(htmlDir, file);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ [${name}] Missing build file: ${filePath}`);
    totalErrors++;
    continue;
  }

  const html = fs.readFileSync(filePath, 'utf8');

  console.log(`🔎 Auditing: ${name} (${file})`);

  // 1. Check <title>
  const titleMatch = html.match(/<title>([^<]+)<\/title>/);
  if (titleMatch) {
    console.log(`   ✓ Title: "${titleMatch[1]}"`);
  } else {
    console.error(`   ❌ Missing <title>`);
    totalErrors++;
  }

  // 2. Check <meta name="description">
  const descMatch = html.match(/<meta name="description" content="([^"]+)"/);
  if (descMatch) {
    console.log(`   ✓ Description (${descMatch[1].length} chars): "${descMatch[1].slice(0, 80)}..."`);
  } else {
    console.error(`   ❌ Missing meta description`);
    totalErrors++;
  }

  // 3. Check canonical
  const canonicalMatch = html.match(/<link rel="canonical" href="([^"]+)"/);
  if (canonicalMatch) {
    console.log(`   ✓ Canonical: ${canonicalMatch[1]}`);
  } else {
    console.error(`   ❌ Missing canonical link`);
    totalErrors++;
  }

  // 4. Check <h1> count
  const h1Matches = html.match(/<h1[^>]*>.*?<\/h1>/gis) || [];
  if (h1Matches.length === 1) {
    console.log(`   ✓ Exactly 1 <h1> heading found`);
  } else {
    console.warn(`   ⚠️ Found ${h1Matches.length} <h1> tags (expected exactly 1)`);
  }

  // 5. Check JSON-LD
  const jsonLdRegex = /<script type="application\/ld\+json"[^>]*>(.*?)<\/script>/gis;
  let match;
  let jsonLdCount = 0;
  while ((match = jsonLdRegex.exec(html)) !== null) {
    jsonLdCount++;
    const rawContent = match[1];

    // Check for unsafe unescaped '<'
    if (rawContent.includes('<')) {
      console.error(`   ❌ Unescaped '<' character inside JSON-LD!`);
      totalErrors++;
    }

    try {
      const parsed = JSON.parse(rawContent);
      const types = Array.isArray(parsed['@type'])
        ? parsed['@type'].join(', ')
        : parsed['@type'];
      console.log(`   ✓ JSON-LD #${jsonLdCount}: @type="${types}"`);

      // Branch-specific schema checks
      if (name === 'Nerul Branch' && types.includes('HealthClub')) {
        if (parsed.geo && parsed.geo.latitude) {
          console.log(`     ✓ Confirmed Geo present: (${parsed.geo.latitude}, ${parsed.geo.longitude})`);
        } else {
          console.error(`     ❌ Nerul should include confirmed geo!`);
          totalErrors++;
        }
      }
      if (name === 'Airoli Branch' && types.includes('HealthClub')) {
        if (parsed.geo) {
          console.error(`     ❌ Airoli MUST OMIT unconfirmed geo!`);
          totalErrors++;
        } else {
          console.log(`     ✓ Unconfirmed Geo strictly omitted for Airoli.`);
        }
      }
    } catch (e) {
      console.error(`   ❌ JSON-LD parse error:`, e.message);
      totalErrors++;
    }
  }

  if (jsonLdCount === 0) {
    console.warn(`   ⚠️ No JSON-LD scripts found`);
  }

  console.log('');
}

// Check sitemap and robots
console.log('----------------------------------------------------');
console.log('AUDITING SITEMAP & ROBOTS');
console.log('----------------------------------------------------');

const sitemapPath = path.resolve('.next/server/app/sitemap.xml.body');
if (fs.existsSync(sitemapPath)) {
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  console.log(`✓ sitemap.xml exists (${sitemap.length} bytes)`);
  const urls = sitemap.match(/<loc>([^<]+)<\/loc>/g) || [];
  console.log(`✓ Sitemap contains ${urls.length} URLs`);
  const hasDevOrApi = urls.some((u) => u.includes('/dev') || u.includes('/api'));
  if (hasDevOrApi) {
    console.error(`❌ Sitemap contains /dev or /api URLs!`);
    totalErrors++;
  } else {
    console.log(`✓ /dev and /api are cleanly excluded from sitemap`);
  }
}

const robotsPath = path.resolve('.next/server/app/robots.txt.body');
if (fs.existsSync(robotsPath)) {
  const robots = fs.readFileSync(robotsPath, 'utf8');
  console.log(`✓ robots.txt exists:\n${robots.trim()}`);
  if (robots.includes('GPTBot') && robots.includes('ClaudeBot') && robots.includes('PerplexityBot')) {
    console.log(`✓ AI search bots (GPTBot, ClaudeBot, PerplexityBot) explicitly allowed`);
  } else {
    console.warn(`⚠️ Some AI search bots missing from robots.txt`);
  }
}

console.log('\n====================================================');
if (totalErrors === 0) {
  console.log('🎉 ALL AUDITS PASSED WITH ZERO ERRORS!');
} else {
  console.log(`❌ AUDIT COMPLETED WITH ${totalErrors} ERROR(S)`);
}
console.log('====================================================\n');
process.exit(totalErrors > 0 ? 1 : 0);

