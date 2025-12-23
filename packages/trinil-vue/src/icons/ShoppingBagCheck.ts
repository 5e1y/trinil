import { defineComponent, h } from 'vue';

export const ShoppingBagCheck = defineComponent({
  name: 'ShoppingBagCheck',
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
        innerHTML: `<path d="M8 8H5.926a1 1 0 0 0-.997.923l-.846 11A1 1 0 0 0 5.08 21H14M8 8V7a4 4 0 1 1 8 0v1M8 8h8m0 0h2.074a1 1 0 0 1 .997.923L19.4 13.2M8 10.5v.5a4 4 0 0 0 8 0v-.5m3.4 2.699A5 5 0 0 0 14 21m5.4-7.801A5 5 0 1 1 14 21m2-3 1.43 1.43a.1.1 0 0 0 .14 0L20 17"/>`,
      }, children);
    };
  },
});
