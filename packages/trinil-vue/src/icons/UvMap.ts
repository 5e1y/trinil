import { defineComponent, h } from 'vue';

export const UvMap = defineComponent({
  name: 'UvMap',
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
        innerHTML: `<path d="M21 12a8.96 8.96 0 0 1-1.204 4.5 9.05 9.05 0 0 1-3.296 3.296 9 9 0 0 1-2 .852M21 12a8.96 8.96 0 0 0-1.204-4.5A9.05 9.05 0 0 0 16.5 4.204a9 9 0 0 0-2-.852M21 12c0 1.333-1.8 4-9 4s-9-2.667-9-4m0 0c0 1.64.438 3.176 1.204 4.5A9.05 9.05 0 0 0 7.5 19.796 8.96 8.96 0 0 0 12 21c.867 0 1.706-.123 2.5-.352M3 12c0-1.64.438-3.176 1.204-4.5A9.04 9.04 0 0 1 7.5 4.204 8.96 8.96 0 0 1 12 3c.867 0 1.706.123 2.5.352m0 0C12.333 2.902 8 4 8 12s4.333 9.099 6.5 8.648"/>`,
      }, children);
    };
  },
});
