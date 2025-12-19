#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { optimize } from 'svgo';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const svgDir = path.join(rootDir, 'svg');
const reactIconsDir = path.join(rootDir, 'packages/trinil-react/src/icons');
const vueIconsDir = path.join(rootDir, 'packages/trinil-vue/src/icons');

// Ensure output directories exist
[reactIconsDir, vueIconsDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

/**
 * Convert kebab-case to PascalCase, removing special characters
 */
function toPascalCase(str) {
  // Remove special characters except hyphens
  const cleaned = str.replace(/[^a-zA-Z0-9\-]/g, '');
  return cleaned
    .split('-')
    .filter(word => word.length > 0)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}

/**
 * Read all SVG files and convert filenames to component names
 */
function getSvgFiles() {
  const files = fs.readdirSync(svgDir).filter(f => f.endsWith('.svg'));
  const icons = files.map(filename => ({
    filename,
    componentName: toPascalCase(filename.replace(/\.svg$/, '')),
  }));

  // Check for naming collisions
  const nameMap = {};
  const collisions = [];
  icons.forEach(icon => {
    if (nameMap[icon.componentName]) {
      collisions.push({
        componentName: icon.componentName,
        files: [nameMap[icon.componentName], icon.filename],
      });
    }
    nameMap[icon.componentName] = icon.filename;
  });

  if (collisions.length > 0) {
    console.error('❌ Name collision detected! The following files would produce the same component name:');
    collisions.forEach(({ componentName, files }) => {
      console.error(`  ${componentName}:`);
      files.forEach(f => console.error(`    - ${f}`));
    });
    process.exit(1);
  }

  return icons;
}

/**
 * Optimize SVG with string manipulation (fast, no DOMParser)
 */
function optimizeSvgString(svgContent) {
  // Optimize with SVGO (safe settings)
  const result = optimize(svgContent, {
    plugins: [
      'preset-default',
      { name: 'removeViewBox', active: false }, // Keep viewBox
      { name: 'convertShapeToPath', active: false },
      { name: 'removeRasterImages', active: false },
    ],
  });

  return result.data;
}

/**
 * Generate React component
 */
function generateReactComponent(svgContent, componentName) {
  // Extract the inner SVG content (without <svg> tag)
  const innerMatch = svgContent.match(/<svg[^>]*>(.*)<\/svg>/s);
  const innerContent = innerMatch ? innerMatch[1] : '';

  // Escape backticks and dollar signs for template literals
  const escapedContent = innerContent
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$/g, '\\$');

  const code = `import React from 'react';

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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label={ariaLabel}
      dangerouslySetInnerHTML={{ __html: \`${escapedContent}\` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

${componentName}.displayName = '${componentName}';
`;

  return code;
}

/**
 * Generate Vue component
 */
function generateVueComponent(svgContent, componentName) {
  // Extract the inner SVG content
  const innerMatch = svgContent.match(/<svg[^>]*>(.*)<\/svg>/s);
  const innerContent = innerMatch ? innerMatch[1] : '';

  // Escape backticks and dollar signs
  const escapedContent = innerContent
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$/g, '\\$');

  const code = `import { defineComponent, h } from 'vue';

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
      const children = [];
      if (props.title) {
        children.push(h('title', {}, props.title));
      }
      return h(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: props.color,
          'stroke-width': 1.5,
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'vector-effect': 'non-scaling-stroke',
          width: props.size,
          height: props.size,
          class: props.class,
          role: 'img',
          'aria-label': props.ariaLabel,
          innerHTML: \`${escapedContent}\`,
        },
        children,
      );
    };
  },
});
`;

  return code;
}

/**
 * Main generator
 */
async function generate() {
  console.log('🎯 Generating icon components...\n');

  const icons = getSvgFiles();
  const totalIcons = icons.length;

  const reactExports = [];
  const vueExports = [];

  for (let i = 0; i < icons.length; i++) {
    const { filename, componentName } = icons[i];
    const svgPath = path.join(svgDir, filename);

    try {
      // Read and optimize SVG
      let svgContent = fs.readFileSync(svgPath, 'utf-8');

      // Quick SVGO optimization
      const result = optimize(svgContent, {
        plugins: [
          'preset-default',
          { name: 'removeViewBox', active: false },
          { name: 'convertShapeToPath', active: false },
          { name: 'removeRasterImages', active: false },
        ],
      });
      svgContent = result.data;

      // Normalize attributes (simple string manipulation for speed)
      // Add xmlns if missing
      if (!svgContent.includes('xmlns=')) {
        svgContent = svgContent.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
      }

      // Ensure viewBox
      if (!svgContent.includes('viewBox=')) {
        svgContent = svgContent.replace('<svg', '<svg viewBox="0 0 24 24"');
      }

      // Set stroke attributes on root SVG
      svgContent = svgContent.replace(/<svg/, '<svg fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"');

      // Remove all hardcoded stroke/fill/stroke-* attributes from child elements
      svgContent = svgContent.replace(/\s+(stroke|fill|stroke-width|stroke-linecap|stroke-linejoin|stroke-dasharray|stroke-dashoffset)="[^"]*"/g, '');

      // Additional cleanup: remove style attributes that might contain stroke properties
      svgContent = svgContent.replace(/\s+style="[^"]*stroke[^"]*"/g, '');

      // Generate React component
      const reactComponent = generateReactComponent(svgContent, componentName);
      fs.writeFileSync(
        path.join(reactIconsDir, `${componentName}.tsx`),
        reactComponent,
      );

      // Generate Vue component
      const vueComponent = generateVueComponent(svgContent, componentName);
      fs.writeFileSync(
        path.join(vueIconsDir, `${componentName}.ts`),
        vueComponent,
      );

      reactExports.push(`export { ${componentName} } from './icons/${componentName}';`);
      vueExports.push(`export { ${componentName} } from './icons/${componentName}';`);

      // Progress
      process.stdout.write(`\r✓ ${i + 1}/${totalIcons} icons generated`);
    } catch (error) {
      console.error(`\n❌ Error processing ${filename}:`, error.message);
      process.exit(1);
    }
  }

  console.log(`\n✅ Generated ${totalIcons} icons\n`);

  // Generate index.ts for React
  const reactIndexContent = reactExports
    .sort()
    .join('\n');
  fs.writeFileSync(
    path.join(rootDir, 'packages/trinil-react/src/index.ts'),
    reactIndexContent + '\n',
  );

  // Generate index.ts for Vue
  const vueIndexContent = vueExports
    .sort()
    .join('\n');
  fs.writeFileSync(
    path.join(rootDir, 'packages/trinil-vue/src/index.ts'),
    vueIndexContent + '\n',
  );

  console.log('📝 Updated index.ts for both packages');
  console.log('✨ Icon generation complete!');
}

// Run the generator
generate().catch(error => {
  console.error('Error:', error);
  process.exit(1);
});
