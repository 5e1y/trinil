#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

// All packages to test
const packages = [
  { name: 'trinil-react', distFile: 'packages/trinil-react/dist/index.js' },
  { name: 'trinil-vue', distFile: 'packages/trinil-vue/dist/index.js' },
  { name: 'trinil-svelte', distFile: 'packages/trinil-svelte/dist/index.js' },
  { name: 'trinil-solid', distFile: 'packages/trinil-solid/dist/index.js' },
  { name: 'trinil-web', distFile: 'packages/trinil-web/dist/index.js' },
];

async function smokeTest() {
  console.log('🧪 Running smoke tests for all packages...\n');

  let allPassed = true;

  for (const pkg of packages) {
    const distPath = path.join(rootDir, pkg.distFile);
    
    // Check dist file exists
    if (!fs.existsSync(distPath)) {
      console.error(`❌ ${pkg.name}: dist file not found. Run "npm run build" first.`);
      allPassed = false;
      continue;
    }

    const distContent = fs.readFileSync(distPath, 'utf-8');

    // Check for expected exports
    if (!distContent.includes('Adhesive') || !distContent.includes('ArrowDown')) {
      console.error(`❌ ${pkg.name}: does not contain expected exports (Adhesive, ArrowDown).`);
      allPassed = false;
      continue;
    }

    // Check for stroke attributes
    if (!distContent.includes('stroke-width') && !distContent.includes('strokeWidth')) {
      console.warn(`⚠️  ${pkg.name}: may not have stroke-width attributes.`);
    }

    console.log(`✓ ${pkg.name}: exports verified`);
  }

  if (allPassed) {
    console.log('\n✅ All smoke tests passed!');
  } else {
    console.error('\n❌ Some smoke tests failed.');
    process.exit(1);
  }
}

smokeTest().catch(error => {
  console.error('Error:', error.message);
  process.exit(1);
});
