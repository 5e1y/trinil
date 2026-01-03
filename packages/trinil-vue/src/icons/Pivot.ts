import { defineComponent, h } from 'vue';

export const Pivot = defineComponent({
  name: 'Pivot',
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
        innerHTML: `<path d="M6.914 6.914C4.116 7.962 2.248 9.848 2.248 12s1.868 4.038 4.666 5.086m0-10.172c1.481-.554 3.222-.873 5.086-.873s3.605.319 5.086.873m-10.172 0C6.36 8.395 6.041 10.136 6.041 12l2.209-1.5M6.914 6.914C7.962 4.116 9.848 2.248 12 2.248s4.038 1.868 5.086 4.666m0 0c2.798 1.048 4.666 2.934 4.666 5.086s-1.868 4.038-4.666 5.086m0-10.172c.554 1.481.873 3.222.873 5.086s-.32 3.605-.873 5.086m0 0c-1.048 2.798-2.934 4.666-5.086 4.666s-4.038-1.868-5.086-4.666m0 0c.89.332 1.872.58 2.919.726.697.096 1.422.188 2.167.188l-1.5-2.25M12.75 12a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0"/>`,
      }, children);
    };
  },
});
