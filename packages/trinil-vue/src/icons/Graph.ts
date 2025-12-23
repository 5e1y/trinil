import { defineComponent, h } from 'vue';

export const Graph = defineComponent({
  name: 'Graph',
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
        innerHTML: `<path d="M6 8.5h2.838a3 3 0 0 1 2.846 2.051l.18.542m0 0 1.673 5.018c.575 1.725 2.908 1.98 3.843.422a2.13 2.13 0 0 1 1.825-1.033H20m-8.136-4.407-1.977 3.042A3 3 0 0 1 7.372 15.5H6m5.864-4.407 2.749-4.228A3 3 0 0 1 17.128 5.5H20M4 4v15a1 1 0 0 0 1 1h15"/>`,
      }, children);
    };
  },
});
