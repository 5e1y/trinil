import { defineComponent, h } from 'vue';

export const Wallet = defineComponent({
  name: 'Wallet',
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
        innerHTML: `<path d="M2.25 6.75v10.5a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3m3 1.5v3h4.5a2.25 2.25 0 0 0 4.5 0h4.5v-3a1.5 1.5 0 0 0-1.5-1.5H6.75a1.5 1.5 0 0 0-1.5 1.5" clip-rule="evenodd"/>`,
      }, children);
    };
  },
});
