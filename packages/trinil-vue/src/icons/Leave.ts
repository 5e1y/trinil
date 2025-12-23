import { defineComponent, h } from 'vue';

export const Leave = defineComponent({
  name: 'Leave',
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
        innerHTML: `<path d="m19.5 20-3-3m0 0-2-2m2 2c4.735-3.642 2.641-11.195-3.293-11.88L3.5 4m13 13c-3.642 4.735-11.195 2.641-11.88-3.293L3.5 4m0 0 7 7m4 4H9m5.5 0V9.5m0 5.5-4-4m0 0V7.5m0 3.5H7"/>`,
      }, children);
    };
  },
});
