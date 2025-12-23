import { defineComponent, h } from 'vue';

export const LockEuro = defineComponent({
  name: 'LockEuro',
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
        innerHTML: `<path d="M8 10H6.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1H16m-8 0V7a4 4 0 1 1 8 0v3m-8 0h8m-6.5 4.5v2m0-2h-1m1 0H12m-2.5 0a2.5 2.5 0 0 1 4.95-.5M9.5 16.5h-1m1 0H12m-2.5 0a2.5 2.5 0 0 0 4.95.5"/>`,
      }, children);
    };
  },
});
