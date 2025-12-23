#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

async function verifyPack() {
  console.log('📦 Verifying npm package contents...\n');

  const packages = [
    { name: 'trinil-react', path: path.join(rootDir, 'packages/trinil-react') },
    { name: 'trinil-vue', path: path.join(rootDir, 'packages/trinil-vue') },
    { name: 'trinil-svelte', path: path.join(rootDir, 'packages/trinil-svelte') },
    { name: 'trinil-solid', path: path.join(rootDir, 'packages/trinil-solid') },
    { name: 'trinil-web', path: path.join(rootDir, 'packages/trinil-web') },
  ];

  for (const pkg of packages) {
    console.log(`\n${pkg.name}:`);
    console.log('─'.repeat(50));

    try {
      const { stdout } = await execPromise(
        `npm pack --dry-run`,
        { cwd: pkg.path }
      );

      // Parse the output
      const lines = stdout.split('\n').filter(l => l.trim());
      const fileLines = lines.filter(l => l.includes('kB') || l.includes('B'));

      // Show file list
      if (fileLines.length > 0) {
        console.log('Files in tarball:');
        fileLines.forEach(line => {
          const match = line.match(/^(.+?)\s+(\d+\.\d+kB|\d+B)$/);
          if (match) {
            console.log(`  ✓ ${match[1].trim()} (${match[2]})`);
          }
        });
      }

      // Extract summary
      const sizeMatch = stdout.match(/unpacked size: (.+)/);
      const fileCountMatch = stdout.match(/total files: (\d+)/);
      if (sizeMatch) console.log(`\nUnpacked size: ${sizeMatch[1]}`);
      if (fileCountMatch) console.log(`Total files: ${fileCountMatch[1]}`);

    } catch (error) {
      console.error(`❌ Error verifying ${pkg.name}:`, error.message);
      process.exit(1);
    }
  }

  console.log('\n✅ Package verification complete');
}

verifyPack().catch(error => {
  console.error('Error:', error.message);
  process.exit(1);
});
