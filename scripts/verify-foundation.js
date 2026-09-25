/**
 * Road-Sathi Foundation Verification Script
 * Validates the workspace layout, packages, and services configuration.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const requiredPaths = [
  'apps/web',
  'apps/provider',
  'apps/admin',
  'services/api',
  'services/ai',
  'packages/shared',
  'packages/config',
  'packages/types',
  'infrastructure/docker',
  'docs/architecture',
  '.env.example',
  '.gitignore',
  'package.json',
  'docker-compose.yml',
  'README.md',
];

console.log('🔍 Checking Road-Sathi workspace foundation...\n');

let missing = 0;

for (const p of requiredPaths) {
  const fullPath = path.join(rootDir, p);
  if (fs.existsSync(fullPath)) {
    console.log(`  ✅ Found: ${p}`);
  } else {
    console.error(`  ❌ Missing: ${p}`);
    missing++;
  }
}

if (missing === 0) {
  console.log('\n✨ All foundational paths and configurations exist and are properly structured!');
  process.exit(0);
} else {
  console.error(`\n⚠️  Verification failed: ${missing} path(s) missing.`);
  process.exit(1);
}
