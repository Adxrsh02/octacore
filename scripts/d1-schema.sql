-- ==============================================================================
-- OCTACORE FITNESS — D1 DATABASE SCHEMA
-- ==============================================================================
-- Run via Wrangler:
--   npx wrangler d1 execute octacore-db --file=./scripts/d1-schema.sql --remote
-- ==============================================================================

CREATE TABLE IF NOT EXISTS leads (
  id TEXT PRIMARY KEY,
  full_name TEXT NOT NULL,
  mobile_number TEXT NOT NULL,
  preferred_branch TEXT NOT NULL,
  fitness_goal TEXT NOT NULL,
  membership_interest TEXT NOT NULL,
  preferred_contact_time TEXT NOT NULL,
  ip TEXT,
  created_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_leads_branch ON leads(preferred_branch);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at);
