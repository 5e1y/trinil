# Agent Release Workflow

## Quick Summary

This document describes how to release new icon versions using the automated scripts.

## Prerequisite: Update SVGs

1. Add or replace icon files in `/svg/`
2. Ensure each SVG has `viewBox="0 0 24 24"` and uses strokes, not fills
3. No further setup needed

## One-Command Release

Run this when `/svg/` is ready:

```bash
npm run release:patch    # Patch version bump (0.1.0 → 0.1.1)
npm run release:minor    # Minor version bump (0.1.0 → 0.2.0)
npm run release:major    # Major version bump (0.1.0 → 1.0.0)
```

This does:
1. ✅ Validates SVG structure (`npm run icons:validate`)
2. ✅ Generates React + Vue + Svelte + Solid + Web components (`npm run icons:generate`)
3. ✅ Generates `ICONS.md` list for each package (auto-included in step 2)
4. ✅ Builds packages (`npm run build`)
5. ✅ Runs smoke tests (`npm run test:smoke`)
6. ✅ Verifies package contents (`npm run verify:pack`)
7. ✅ Bumps versions (all packages stay in sync)
8. ✅ Commits changes: `chore(release): vX.Y.Z`
9. ✅ Tags: `vX.Y.Z`
10. ✅ Pushes to origin (if configured)

## Publish to npm

After release, publish to npm:

```bash
npm login   # If not already logged in (one-time setup)
npm run publish:react   # Human will approve passkey/OTP if needed
npm run publish:vue
npm run publish:svelte
npm run publish:solid
npm run publish:web
```

All 5 packages will be tagged as `X.Y.Z` on npm.

## Rollback (if needed)

If something goes wrong before publishing:

```bash
git reset --soft HEAD~1     # Undo last commit
git tag -d vX.Y.Z           # Delete tag
git push origin --delete vX.Y.Z  # Delete remote tag (if pushed)
```

## Individual Commands (for debugging)

| Command | Purpose |
|---------|---------|
| `npm run icons:validate` | Check SVG files for errors |
| `npm run icons:generate` | Regenerate components from `/svg/` |
| `npm run build` | Build both packages |
| `npm run build:react` | Build React only |
| `npm run build:vue` | Build Vue only |
| `npm run test:smoke` | Quick export verification |
| `npm run verify:pack` | Show tarball contents |
| `npm run clean` | Remove dist + generated sources |

## Expected Behavior

- Generated components are NOT committed (they're in .gitignore)
- Built dist/ IS committed (ensures reproducible releases)
- Both packages stay in sync (same version number)
- Only `/svg/` needs human updates; everything else is automated

## What Gets Published

Each npm package contains ONLY:
- `dist/index.js` - ESM bundle
- `dist/index.d.ts` - TypeScript definitions
- `ICONS.md` - Complete list of available icons
- `README.md` - Package documentation
- `LICENSE` - MIT license
- `package.json` - Manifest

No source code, no SVGs, no examples, no scripts.
