import { defineComponent, h } from 'vue';

export const SignpostAlt = defineComponent({
  name: 'SignpostAlt',
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
        innerHTML: `<path d="M12 5h5.586a1 1 0 0 1 .707.293l1.5 1.5a1 1 0 0 1 0 1.414l-1.5 1.5a1 1 0 0 1-.707.293H12m0-5H7a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5m0-5V3m0 14h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5m0 5H6.414a1 1 0 0 1-.707-.293l-1.5-1.5a1 1 0 0 1 0-1.414l1.5-1.5A1 1 0 0 1 6.414 12H12m0 5v4m0-9v-2"/>`,
      }, children);
    };
  },
});
