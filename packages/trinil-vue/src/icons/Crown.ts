import { defineComponent, h } from 'vue';

export const Crown = defineComponent({
  name: 'Crown',
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
        innerHTML: `<path d="M3.75 18.75h16.5a1.5 1.5 0 0 0 1.5-1.5V9l-3-3.75-3 3.75L12 5.25 8.25 9l-3-3.75-3 3.75v8.25a1.5 1.5 0 0 0 1.5 1.5M6 13.5A.75.75 0 1 1 6 15a.75.75 0 0 1 0-1.5m12 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m-8.25 0a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0" clip-rule="evenodd"/>`,
      }, children);
    };
  },
});
