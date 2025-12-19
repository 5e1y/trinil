# Trinil Icon Library - Release Checklist

## Pre-Release Checklist

- [ ] Updated `/svg/` with new or modified icons
- [ ] All icons have `viewBox="0 0 24 24"`
- [ ] All icons use strokes (no fills)
- [ ] Ran `npm run icons:validate` and no critical errors exist

## One-Command Release

### Patch Release (fix bugs, no new features)

```bash
npm run release:patch
```

This automatically:
1. Validates SVG structure
2. Generates React + Vue components
3. Builds packages
4. Runs smoke tests
5. Bumps versions: 1.0.1 → 1.0.2
6. Creates git commit: `chore(release): v1.0.2`
7. Creates git tag: `v1.0.2`
8. Pushes to origin main + tag

### Minor Release (new icons, backwards compatible)

```bash
npm run release:minor
```

Bumps versions: 1.0.1 → 1.1.0 (rest same as patch)

### Major Release (breaking changes)

```bash
npm run release:major
```

Bumps versions: 1.0.1 → 2.0.0 (rest same as patch)

## Post-Release: Publish to npm

### Step 1: Login (one-time setup)

```bash
npm login
```

Follow prompts to authenticate with npm account.

### Step 2: Publish React Package

```bash
npm run publish:react
```

This publishes to npm registry. You may need to approve:
- Passkey challenge
- OTP code (if 2FA enabled)

### Step 3: Publish Vue Package

```bash
npm run publish:vue
```

Again, approve passkey/OTP if prompted.

### Verify Published

Check npm:
- https://www.npmjs.com/package/trinil-react
- https://www.npmjs.com/package/trinil-vue

## If Something Goes Wrong

### Rollback (before npm publish)

```bash
git reset --soft HEAD~1        # Undo commit (keeps changes staged)
git tag -d v1.0.2              # Delete local tag
git push origin --delete v1.0.2 # Delete remote tag (if pushed)
```

Then fix and re-run release.

### Unpublish from npm (after publish)

If you published by mistake:

```bash
npm unpublish trinil-react@1.0.2 --force
npm unpublish trinil-vue@1.0.2 --force
```

⚠️ Use caution - this removes the package version!

## Manual Commands (for debugging)

| Command | Purpose |
|---------|---------|
| `npm run icons:validate` | Check SVG files for structure issues |
| `npm run icons:generate` | Regenerate React + Vue components |
| `npm run build` | Build both packages |
| `npm run build:react` | Build React only |
| `npm run build:vue` | Build Vue only |
| `npm run test:smoke` | Quick verification of exports |
| `npm run verify:pack` | Show what will be published |
| `npm run clean` | Remove dist + generated sources |

## Example: Complete Release Cycle

```bash
# 1. Update SVGs
cp /path/to/new-icons/*.svg svg/

# 2. Validate
npm run icons:validate

# 3. Release
npm run release:patch

# 4. Check output
# - Verify git commit: git log -1
# - Verify git tag: git tag
# - Review changes: git diff HEAD~1

# 5. Publish (if all looks good)
npm run publish:react
npm run publish:vue

# 6. Verify on npm
# https://www.npmjs.com/package/trinil-react
# https://www.npmjs.com/package/trinil-vue
```

## Version Numbering

Both packages are always versioned together:

- React: `trinil-react@X.Y.Z`
- Vue: `trinil-vue@X.Y.Z`

Example history:
```
v1.0.0  - Initial release
v1.0.1  - Patch: Fix icon detail
v1.1.0  - Minor: Add 50 new icons
v2.0.0  - Major: Redesigned icon set
```

## Support

If you encounter errors during release:

1. Run `npm run icons:validate` to check SVG issues
2. Run `npm run verify:pack` to inspect tarball contents
3. Check git status: `git status`, `git log`
4. Review release script output for specific error messages

All scripts provide detailed error messages to help troubleshoot.

---

**Last Updated:** December 19, 2025  
**Icon Count:** 765  
**Supported Frameworks:** React 16.8+, Vue 3+
