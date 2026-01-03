import { defineComponent, h } from 'vue';

export const ShoppingBag = defineComponent({
  name: 'ShoppingBag',
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
        innerHTML: `<path d="M16.5 7.5h1.577a1.5 1.5 0 0 1 1.498 1.421l.592 11.25a1.5 1.5 0 0 1-1.498 1.579H5.33a1.5 1.5 0 0 1-1.498-1.579l.592-11.25A1.5 1.5 0 0 1 5.923 7.5H7.5m9 0v-.75a4.5 4.5 0 0 0-9 0v.75m9 0h-9m9 3a4.5 4.5 0 0 1-9 0"/>`,
      }, children);
    };
  },
});
