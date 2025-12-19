#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const svgDir = path.join(rootDir, 'svg');

/**
 * Convert kebab-case to PascalCase, removing special characters
 */
function toPascalCase(str) {
  const cleaned = str.replace(/[^a-zA-Z0-9\-]/g, '');
  return cleaned
    .split('-')
    .filter(word => word.length > 0)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}

async function validateIcons() {
  console.log('🔍 Validating SVG icons...\n');

  if (!fs.existsSync(svgDir)) {
    console.error('❌ No /svg directory found');
    process.exit(1);
  }

  const files = fs.readdirSync(svgDir).filter(f => f.endsWith('.svg'));
  if (files.length === 0) {
    console.error('❌ No SVG files found in /svg');
    process.exit(1);
  }

  const errors = [];
  const warnings = [];
  const nameMap = {};
  const collisions = [];

  for (const filename of files) {
    const filePath = path.join(svgDir, filename);
    const content = fs.readFileSync(filePath, 'utf-8');
    const componentName = toPascalCase(filename.replace(/\.svg$/, ''));

    // Check for naming collisions
    if (nameMap[componentName]) {
      collisions.push({
        componentName,
        files: [nameMap[componentName], filename],
      });
    }
    nameMap[componentName] = filename;

    // Validate SVG structure
    if (!content.includes('<svg')) {
      errors.push(`${filename}: Missing <svg> tag`);
      continue;
    }

    if (!content.includes('viewBox=')) {
      warnings.push(`${filename}: Missing viewBox attribute`);
    }

    if (filename.includes('@') || filename.includes('#')) {
      warnings.push(`${filename}: Contains special characters (may be stripped)`);
    }
  }

  // Report collisions
  if (collisions.length > 0) {
    console.error('❌ Naming collision detected!');
    collisions.forEach(({ componentName, files }) => {
      console.error(`  ${componentName}:`);
      files.forEach(f => console.error(`    - ${f}`));
    });
    errors.push(`${collisions.length} naming collision(s)`);
  }

  // Report errors
  if (errors.length > 0) {
    console.error('\n❌ Validation failed:');
    errors.forEach(e => console.error(`  - ${e}`));
    process.exit(1);
  }

  // Report warnings
  if (warnings.length > 0) {
    console.warn('\n⚠️  Warnings:');
    warnings.forEach(w => console.warn(`  - ${w}`));
  }

  console.log(`✅ Validated ${files.length} SVG icons\n`);
}

validateIcons().catch(error => {
  console.error('Error:', error.message);
  process.exit(1);
});
