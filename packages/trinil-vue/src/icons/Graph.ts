import { defineComponent, h } from 'vue';

export const Graph = defineComponent({
  name: 'Graph',
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
        innerHTML: `<path d="M2.25 3.75v15a1.5 1.5 0 0 0 1.5 1.5h18M6 8.25h3.573a1.5 1.5 0 0 1 1.342.83l1.235 2.47m0 0 1.765 3.53a1.5 1.5 0 0 0 2.541.228l.344-.458a1.5 1.5 0 0 1 1.2-.6h3.75m-9.6-2.7-1.968 3.444a1.5 1.5 0 0 1-1.302.756H6m6.15-4.2 3.168-5.544a1.5 1.5 0 0 1 1.303-.756h5.129"/>`,
      }, children);
    };
  },
});
