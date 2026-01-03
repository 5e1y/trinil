import { defineComponent, h } from 'vue';

export const OrbitCamera = defineComponent({
  name: 'OrbitCamera',
  props: {
    size: { type: Number, default: 24 },
    color: { type: String, default: 'currentColor' },
    strokeWidth: { type: Number, default: 1.5 },
    class: { type: String, default: undefined },
    title: { type: String, default: undefined },
    ariaLabel: { type: String, default: undefined },
  },
  setup(props) {
    return () => {
      const children = props.title ? [h('title', {}, props.title)] : [];
      return h('svg', {
        xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: props.color,
        'stroke-width': props.strokeWidth, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'vector-effect': 'non-scaling-stroke',
        width: props.size, height: props.size, class: props.class, role: 'img', 'aria-label': props.ariaLabel,
        innerHTML: `<path d="M6.914 6.914C4.116 7.962 2.248 9.848 2.248 12s1.868 4.038 4.666 5.086m0-10.172c1.481-.554 3.222-.873 5.086-.873s3.605.32 5.086.873m-10.172 0C6.36 8.395 6.041 10.137 6.041 12L7.5 10.5m-.586-3.586C7.962 4.116 9.848 2.25 12 2.25s4.038 1.867 5.086 4.665m0 0c2.798 1.048 4.666 2.934 4.666 5.086s-1.868 4.038-4.666 5.086m0-10.172c.554 1.481.873 3.223.873 5.086s-.32 3.605-.873 5.086m0 0c-1.048 2.799-2.934 4.666-5.086 4.666s-4.038-1.867-5.086-4.666m0 0c.89.333 1.872.58 2.919.726.697.096 1.422.188 2.167.188l-1.5-1.5M12 12v.75h-1.5v-1.5H12zm0 0 1.5-.75v1.5z"/>`,
      }, children);
    };
  },
});
