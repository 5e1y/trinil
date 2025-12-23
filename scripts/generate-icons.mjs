#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { optimize } from 'svgo';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const svgDir = path.join(rootDir, 'svg');

const packages = {
  react: path.join(rootDir, 'packages/trinil-react/src/icons'),
  vue: path.join(rootDir, 'packages/trinil-vue/src/icons'),
  svelte: path.join(rootDir, 'packages/trinil-svelte/src/icons'),
  solid: path.join(rootDir, 'packages/trinil-solid/src/icons'),
  web: path.join(rootDir, 'packages/trinil-web/src/icons'),
};

Object.values(packages).forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

function toPascalCase(str) {
  const cleaned = str.replace(/[^a-zA-Z0-9\-]/g, '');
  return cleaned.split('-').filter(w => w.length > 0).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('');
}

function toKebabCase(str) {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

const reservedWords = ['Component', 'Array', 'Object', 'Function', 'String', 'Number', 'Boolean', 'Symbol', 'Map', 'Set', 'Promise', 'Error'];

function getSvgFiles() {
  const files = fs.readdirSync(svgDir).filter(f => f.endsWith('.svg'));
  return files.map(filename => {
    const componentName = toPascalCase(filename.replace(/\.svg$/, ''));
    const solidComponentName = reservedWords.includes(componentName) ? componentName + 'Ico' : componentName;
    return {
      filename,
      componentName,
      solidComponentName,
      tagName: 'trinil-' + toKebabCase(componentName),
    };
  });
}

function generateReactComponent(svgContent, componentName) {
  const innerMatch = svgContent.match(/<svg[^>]*>(.*)<\/svg>/s);
  const innerContent = innerMatch ? innerMatch[1] : '';
  const escaped = innerContent.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
  return `import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ${componentName}: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: \`${escaped}\` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
${componentName}.displayName = '${componentName}';
`;
}

function generateVueComponent(svgContent, componentName) {
  const innerMatch = svgContent.match(/<svg[^>]*>(.*)<\/svg>/s);
  const innerContent = innerMatch ? innerMatch[1] : '';
  const escaped = innerContent.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
  return `import { defineComponent, h } from 'vue';

export const ${componentName} = defineComponent({
  name: '${componentName}',
  props: {
    size: { type: Number, default: 24 },
    color: { type: String, default: 'currentColor' },
    class: { type: String, default: undefined },
    title: { type: String, default: undefined },
    ariaLabel: { type: String, default: undefined },
  },
  setup(props) {
    return () => {
      const children = props.title ? [h('title', {}, props.title)] : [];
      return h('svg', {
        xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: props.color,
        'stroke-width': 1.5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'vector-effect': 'non-scaling-stroke',
        width: props.size, height: props.size, class: props.class, role: 'img', 'aria-label': props.ariaLabel,
        innerHTML: \`${escaped}\`,
      }, children);
    };
  },
});
`;
}

function generateSvelteComponent(svgContent, componentName) {
  const innerMatch = svgContent.match(/<svg[^>]*>(.*)<\/svg>/s);
  const innerContent = innerMatch ? innerMatch[1] : '';
  const escaped = innerContent.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
  return `export interface IconProps { size?: number; color?: string; class?: string; title?: string; ariaLabel?: string; }

export function ${componentName}(props: IconProps = {}): { html: string; props: IconProps } {
  const { size = 24, color = 'currentColor', class: className, title, ariaLabel } = props;
  const titleTag = title ? '<title>' + title + '</title>' : '';
  const html = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="' + color + '" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" width="' + size + '" height="' + size + '"' + (className ? ' class="' + className + '"' : '') + ' role="img"' + (ariaLabel ? ' aria-label="' + ariaLabel + '"' : '') + '>' + titleTag + \`${escaped}\` + '</svg>';
  return { html, props };
}
export const ${componentName}Icon = \`${escaped}\`;
`;
}

function generateSolidComponent(svgContent, solidComponentName) {
  const innerMatch = svgContent.match(/<svg[^>]*>(.*)<\/svg>/s);
  const innerContent = innerMatch ? innerMatch[1] : '';
  const escaped = innerContent.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
  return `import { splitProps } from 'solid-js';
import type { Component as SolidComponent, JSX } from 'solid-js';

export interface IconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number; color?: string; title?: string; ariaLabel?: string;
}

export const ${solidComponentName}: SolidComponent<IconProps> = (props) => {
  const [local, others] = splitProps(props, ['size', 'color', 'class', 'title', 'ariaLabel']);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={local.color ?? 'currentColor'}
      stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"
      width={local.size ?? 24} height={local.size ?? 24} class={local.class} role="img" aria-label={local.ariaLabel}
      innerHTML={\`${escaped}\`} {...others}>
      {local.title && <title>{local.title}</title>}
    </svg>
  );
};
`;
}

function generateWebComponent(svgContent, componentName, tagName) {
  const innerMatch = svgContent.match(/<svg[^>]*>(.*)<\/svg>/s);
  const innerContent = innerMatch ? innerMatch[1] : '';
  const escaped = innerContent.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
  return `export const ${componentName}Icon = \`${escaped}\`;

export class ${componentName}Element extends HTMLElement {
  static observedAttributes = ['size', 'color', 'title', 'aria-label'];
  constructor() { super(); this.attachShadow({ mode: 'open' }); }
  connectedCallback() { this.render(); }
  attributeChangedCallback() { this.render(); }
  render() {
    const size = this.getAttribute('size') || '24';
    const color = this.getAttribute('color') || 'currentColor';
    const title = this.getAttribute('title');
    const ariaLabel = this.getAttribute('aria-label');
    const titleTag = title ? '<title>' + title + '</title>' : '';
    this.shadowRoot!.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="' + color + '" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" width="' + size + '" height="' + size + '" role="img"' + (ariaLabel ? ' aria-label="' + ariaLabel + '"' : '') + '>' + titleTag + \`${escaped}\` + '</svg>';
  }
}

export function register${componentName}(customName = '${tagName}') {
  if (!customElements.get(customName)) { customElements.define(customName, ${componentName}Element); }
}
`;
}

async function generate() {
  console.log('🎯 Generating icon components for all 5 frameworks...\n');
  const icons = getSvgFiles();
  const total = icons.length;
  const exports = { react: [], vue: [], svelte: [], solid: [], web: [] };

  for (let i = 0; i < icons.length; i++) {
    const { filename, componentName, solidComponentName, tagName } = icons[i];
    const svgPath = path.join(svgDir, filename);
    try {
      let svg = fs.readFileSync(svgPath, 'utf-8');
      const result = optimize(svg, { plugins: ['preset-default', { name: 'removeViewBox', active: false }] });
      svg = result.data;
      if (!svg.includes('xmlns=')) svg = svg.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
      if (!svg.includes('viewBox=')) svg = svg.replace('<svg', '<svg viewBox="0 0 24 24"');
      svg = svg.replace(/<svg/, '<svg fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"');
      svg = svg.replace(/\s+(stroke|fill|stroke-width|stroke-linecap|stroke-linejoin|stroke-dasharray|stroke-dashoffset)="[^"]*"/g, '');

      fs.writeFileSync(path.join(packages.react, componentName + '.tsx'), generateReactComponent(svg, componentName));
      fs.writeFileSync(path.join(packages.vue, componentName + '.ts'), generateVueComponent(svg, componentName));
      fs.writeFileSync(path.join(packages.svelte, componentName + '.ts'), generateSvelteComponent(svg, componentName));
      fs.writeFileSync(path.join(packages.solid, solidComponentName + '.tsx'), generateSolidComponent(svg, solidComponentName));
      fs.writeFileSync(path.join(packages.web, componentName + '.ts'), generateWebComponent(svg, componentName, tagName));

      exports.react.push("export { " + componentName + " } from './icons/" + componentName + "';");
      exports.vue.push("export { " + componentName + " } from './icons/" + componentName + "';");
      exports.svelte.push("export { " + componentName + ", " + componentName + "Icon } from './icons/" + componentName + "';");
      exports.solid.push("export { " + solidComponentName + " } from './icons/" + solidComponentName + "';");
      exports.web.push("export { " + componentName + "Element, " + componentName + "Icon, register" + componentName + " } from './icons/" + componentName + "';");

      process.stdout.write('\r✓ ' + (i + 1) + '/' + total + ' icons');
    } catch (err) {
      console.error('\n❌ Error: ' + filename, err.message);
      process.exit(1);
    }
  }

  console.log('\n✅ Generated ' + total + ' icons for 5 frameworks\n');

  fs.writeFileSync(path.join(rootDir, 'packages/trinil-react/src/index.ts'), exports.react.sort().join('\n') + '\n');
  fs.writeFileSync(path.join(rootDir, 'packages/trinil-vue/src/index.ts'), exports.vue.sort().join('\n') + '\n');
  fs.writeFileSync(path.join(rootDir, 'packages/trinil-svelte/src/index.ts'), exports.svelte.sort().join('\n') + '\n');
  fs.writeFileSync(path.join(rootDir, 'packages/trinil-solid/src/index.ts'), exports.solid.sort().join('\n') + '\n');
  
  // Web index without registerAllIcons for now (users import individual register functions)
  const webIndex = exports.web.sort().join('\n') + '\n\n// Helper to register a single icon\nexport function registerIcon(tagName: string, ElementClass: typeof HTMLElement) {\n  if (!customElements.get(tagName)) { customElements.define(tagName, ElementClass); }\n}\n';
  fs.writeFileSync(path.join(rootDir, 'packages/trinil-web/src/index.ts'), webIndex);

  console.log('📝 Updated index.ts for all 5 packages');

  // Generate ICONS.md for each package and update package.json files
  generateIconsList(icons);
  ensureIconsInPackageFiles();

  console.log('✨ Done!');
}

/**
 * Ensure ICONS.md is included in the "files" field of each package.json
 */
function ensureIconsInPackageFiles() {
  const packageNames = ['trinil-react', 'trinil-vue', 'trinil-svelte', 'trinil-solid', 'trinil-web'];
  
  for (const pkgName of packageNames) {
    const pkgPath = path.join(rootDir, 'packages', pkgName, 'package.json');
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
    
    if (pkg.files && !pkg.files.includes('ICONS.md')) {
      // Insert ICONS.md after README.md or at the end
      const readmeIndex = pkg.files.indexOf('README.md');
      if (readmeIndex !== -1) {
        pkg.files.splice(readmeIndex + 1, 0, 'ICONS.md');
      } else {
        pkg.files.push('ICONS.md');
      }
      fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
      console.log(`  ✓ Added ICONS.md to ${pkgName}/package.json`);
    }
  }
}

/**
 * Generate ICONS.md file for each package with the list of available icons
 */
function generateIconsList(icons) {
  const total = icons.length;
  const now = new Date().toISOString().split('T')[0];
  
  // Sort icons alphabetically by componentName
  const sortedIcons = [...icons].sort((a, b) => a.componentName.localeCompare(b.componentName));
  
  // React package
  const reactIcons = sortedIcons.map(i => i.componentName);
  const reactContent = generateMarkdown('trinil-react', 'React', reactIcons, total, now, 'tsx', 
    `import { ${reactIcons.slice(0, 3).join(', ')} } from 'trinil-react';`);
  fs.writeFileSync(path.join(rootDir, 'packages/trinil-react/ICONS.md'), reactContent);

  // Vue package
  const vueIcons = sortedIcons.map(i => i.componentName);
  const vueContent = generateMarkdown('trinil-vue', 'Vue', vueIcons, total, now, 'ts',
    `import { ${vueIcons.slice(0, 3).join(', ')} } from 'trinil-vue';`);
  fs.writeFileSync(path.join(rootDir, 'packages/trinil-vue/ICONS.md'), vueContent);

  // Svelte package
  const svelteIcons = sortedIcons.map(i => i.componentName);
  const svelteContent = generateMarkdown('trinil-svelte', 'Svelte', svelteIcons, total, now, 'ts',
    `import { ${svelteIcons.slice(0, 3).join(', ')} } from 'trinil-svelte';`);
  fs.writeFileSync(path.join(rootDir, 'packages/trinil-svelte/ICONS.md'), svelteContent);

  // Solid package (with reserved word handling)
  const solidIcons = sortedIcons.map(i => i.solidComponentName);
  const solidContent = generateMarkdown('trinil-solid', 'SolidJS', solidIcons, total, now, 'tsx',
    `import { ${solidIcons.slice(0, 3).join(', ')} } from 'trinil-solid';`,
    '\n> **Note:** Some icons have an `Ico` suffix to avoid conflicts with reserved JavaScript words (e.g., `ArrayIco` instead of `Array`).');
  fs.writeFileSync(path.join(rootDir, 'packages/trinil-solid/ICONS.md'), solidContent);

  // Web Components package (with tag names)
  const webIcons = sortedIcons.map(i => ({ name: i.componentName, tag: i.tagName }));
  const webContent = generateWebMarkdown('trinil-web', webIcons, total, now);
  fs.writeFileSync(path.join(rootDir, 'packages/trinil-web/ICONS.md'), webContent);

  console.log('📋 Generated ICONS.md for all 5 packages');
}

/**
 * Generate markdown content for standard packages
 */
function generateMarkdown(packageName, framework, icons, total, date, lang, importExample, note = '') {
  const iconsList = icons.map(name => `- \`${name}\``).join('\n');
  
  return `# ${packageName} - Available Icons

> **${total} icons** available for ${framework}
> 
> Last updated: ${date}
${note}

## Usage

\`\`\`${lang}
${importExample}
\`\`\`

## Icon List

${iconsList}
`;
}

/**
 * Generate markdown content for Web Components package
 */
function generateWebMarkdown(packageName, icons, total, date) {
  const iconsList = icons.map(i => `| \`${i.name}\` | \`<${i.tag}>\` | \`${i.name}Element\` | \`register${i.name}\` |`).join('\n');
  
  return `# ${packageName} - Available Icons

> **${total} icons** available as Web Components
> 
> Last updated: ${date}

## Usage

\`\`\`html
<script type="module">
  import { registerArrowDown, registerCheck } from 'trinil-web';
  registerArrowDown();
  registerCheck();
</script>

<trinil-arrow-down size="24" color="currentColor"></trinil-arrow-down>
<trinil-check size="32" color="green"></trinil-check>
\`\`\`

## Icon List

| Component | Tag Name | Element Class | Register Function |
|-----------|----------|---------------|-------------------|
${iconsList}
`;
}

generate().catch(err => { console.error(err); process.exit(1); });
