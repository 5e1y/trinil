import { defineComponent, h } from 'vue';

export const CreditCardCheck = defineComponent({
  name: 'CreditCardCheck',
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
        innerHTML: `<path d="M21 9V7.5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2V9m18 0H3m18 0v5M3 9v7.5a2 2 0 0 0 2 2h8.025M16 18l1.43 1.43a.1.1 0 0 0 .14 0L20 17m1-3a5 5 0 0 0-7.975 4.5M21 14a5 5 0 1 1-7.975 4.5"/>`,
      }, children);
    };
  },
});
