import { defineComponent, h } from 'vue';

export const CartMinus = defineComponent({
  name: 'CartMinus',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M2.25 3.75h2.48a1.5 1.5 0 0 1 1.479 1.253L6.5 6.75m1.75 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m0 0-.5-3m.5 3h3.041m-3.541-3L6.5 6.75m1.25 7.5h4.637M6.5 6.75h13.42a1.5 1.5 0 0 1 1.471 1.794l-.656 3.283m1.765 6.548h-6.75"/>`,
      }, children);
    };
  },
});
