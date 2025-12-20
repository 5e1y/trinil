#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

const releaseType = process.argv[2] || 'patch';
if (!['patch', 'minor', 'major'].includes(releaseType)) {
  console.error('❌ Invalid release type. Use: patch, minor, or major');
  process.exit(1);
}

/**
 * Execute a shell command
 */
async function run(cmd, cwd = rootDir) {
  console.log(`  $ ${cmd}`);
  try {
    const { stdout, stderr } = await execPromise(cmd, { cwd });
    if (stdout) console.log(stdout.trim());
    if (stderr) console.warn(stderr.trim());
  } catch (error) {
    console.error(`❌ Command failed: ${cmd}`);
    console.error(error.message);
    process.exit(1);
  }
}

/**
 * Get current version from a package.json
 */
function getVersion(pkgPath) {
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
  return pkg.version;
}

/**
 * Set version in a package.json
 */
function setVersion(pkgPath, version) {
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
  pkg.version = version;
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
}

/**
 * Increment version
 */
function incrementVersion(version, type) {
  const [major, minor, patch] = version.split('.').map(Number);
  switch (type) {
    case 'major':
      return `${major + 1}.0.0`;
    case 'minor':
      return `${major}.${minor + 1}.0`;
    case 'patch':
      return `${major}.${minor}.${patch + 1}`;
  }
}

/**
 * Main release flow
 */
async function release() {
  console.log(`🚀 Starting ${releaseType} release...\n`);

  // 1. Validate icons
  console.log('Step 1: Validating icons...');
  await run('npm run icons:validate');

  // 2. Generate icons
  console.log('\nStep 2: Generating icons...');
  await run('npm run icons:generate');

  // 3. Build packages
  console.log('\nStep 3: Building packages...');
  await run('npm run build');

  // 4. Run smoke tests
  console.log('\nStep 4: Running smoke tests...');
  await run('npm run test:smoke');

  // 5. Verify pack contents
  console.log('\nStep 5: Verifying package contents...');
  await run('npm run verify:pack');

  // 6. Bump versions (same for both packages)
  console.log(`\nStep 6: Bumping versions (${releaseType})...`);
  const reactPkgPath = path.join(rootDir, 'packages/trinil-react/package.json');
  const vuePkgPath = path.join(rootDir, 'packages/trinil-vue/package.json');
  
  const currentVersion = getVersion(reactPkgPath);
  const newVersion = incrementVersion(currentVersion, releaseType);
  
  console.log(`  Current: ${currentVersion}`);
  console.log(`  New: ${newVersion}`);
  
  setVersion(reactPkgPath, newVersion);
  setVersion(vuePkgPath, newVersion);

  // 7. Commit changes
  console.log('\nStep 7: Committing changes...');
  await run(`git add -A`, rootDir);
  await run(`git commit -m "chore(release): v${newVersion}"`, rootDir);

  // 8. Create tag
  console.log('\nStep 8: Creating git tag...');
  await run(`git tag v${newVersion}`, rootDir);

  // 9. Push (only if remote is configured)
  console.log('\nStep 9: Pushing to origin...');
  try {
    // Get current branch name
    const { stdout: branch } = await execPromise('git rev-parse --abbrev-ref HEAD', { cwd: rootDir });
    const branchName = branch.trim();
    
    if (branchName === 'HEAD') {
      console.warn('⚠️  In detached HEAD state. Skipping push.');
      console.log('To push manually later:');
      console.log('  git checkout <your-branch>');
      console.log('  git cherry-pick ' + (await execPromise('git rev-parse HEAD', { cwd: rootDir })).stdout.trim());
      console.log(`  git push origin <your-branch>`);
      console.log(`  git push origin v${newVersion}`);
    } else {
      await run(`git push origin ${branchName}`, rootDir);
      await run(`git push origin v${newVersion}`, rootDir);
      console.log('✓ Pushed commit and tag to origin');
    }
  } catch (error) {
    console.warn(
      '⚠️  Could not push to origin. You may need to configure your git remote or credentials.\n' +
      'Push manually with:\n' +
      '  git push origin <your-branch>\n' +
      '  git push origin v' + newVersion
    );
  }

  console.log(`\n✅ Release v${newVersion} complete!\n`);
  console.log('Next steps:');
  console.log(`  npm run publish:react    (then approve npm auth)`);
  console.log(`  npm run publish:vue      (then approve npm auth)`);
  console.log('\nTo undo this release:');
  console.log(`  git reset --soft HEAD~1`);
  console.log(`  git tag -d v${newVersion}`);
}

release().catch(error => {
  console.error('Release failed:', error.message);
  process.exit(1);
});
