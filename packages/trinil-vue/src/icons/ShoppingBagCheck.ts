import { defineComponent, h } from 'vue';

export const ShoppingBagCheck = defineComponent({
  name: 'ShoppingBagCheck',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M16.5 7.5h1.577a1.5 1.5 0 0 1 1.498 1.421l.134 2.547M16.5 7.5v-.75a4.5 4.5 0 0 0-9 0v.75m9 0h-9m0 0H5.923a1.5 1.5 0 0 0-1.498 1.421l-.592 11.25a1.5 1.5 0 0 0 1.498 1.579h7.056M16.4 11.44q.098-.455.099-.94m-9 0a4.5 4.5 0 0 0 4.452 4.5m2.298 3.75 2.894 2.894a.15.15 0 0 0 .212 0l4.91-4.91"/>`,
      }, children);
    };
  },
});
