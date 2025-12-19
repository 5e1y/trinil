#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

async function smokeTest() {
  console.log('🧪 Running smoke tests...\n');

  const reactDistFile = path.join(rootDir, 'packages/trinil-react/dist/index.js');
  const vueDistFile = path.join(rootDir, 'packages/trinil-vue/dist/index.js');

  // Check React package
  if (!fs.existsSync(reactDistFile)) {
    console.error('❌ React dist file not found. Run "npm run build" first.');
    process.exit(1);
  }

  const reactDist = fs.readFileSync(reactDistFile, 'utf-8');
  if (!reactDist.includes('Adhesive') || !reactDist.includes('ArrowDown')) {
    console.error('❌ React dist does not contain expected exports.');
    process.exit(1);
  }
  console.log('✓ React dist contains expected exports (Adhesive, ArrowDown, ...)');

  // Check Vue package
  if (!fs.existsSync(vueDistFile)) {
    console.error('❌ Vue dist file not found. Run "npm run build" first.');
    process.exit(1);
  }

  const vueDist = fs.readFileSync(vueDistFile, 'utf-8');
  if (!vueDist.includes('Adhesive') || !vueDist.includes('ArrowDown')) {
    console.error('❌ Vue dist does not contain expected exports.');
    process.exit(1);
  }
  console.log('✓ Vue dist contains expected exports (Adhesive, ArrowDown, ...)');

  // Check for locked stroke attributes
  if (!reactDist.includes('stroke-width') && !reactDist.includes('strokeWidth')) {
    console.warn('⚠️  React dist may not have stroke-width attributes.');
  } else {
    console.log('✓ React dist includes stroke attributes');
  }

  if (!vueDist.includes('stroke-width') && !vueDist.includes('stroke-width')) {
    console.warn('⚠️  Vue dist may not have stroke-width attributes.');
  } else {
    console.log('✓ Vue dist includes stroke attributes');
  }

  console.log('\n✅ Smoke tests passed!');
}

smokeTest().catch(error => {
  console.error('Error:', error.message);
  process.exit(1);
});
