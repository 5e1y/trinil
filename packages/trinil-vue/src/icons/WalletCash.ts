import { defineComponent, h } from 'vue';

export const WalletCash = defineComponent({
  name: 'WalletCash',
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
        innerHTML: `<path d="M18.75 12.75h-4.5a2.25 2.25 0 0 1-3.966 1.455m-4.94-1.455a3 3 0 1 1 4.94 1.455m-4.94-1.455H9.75c0 .555.2 1.063.534 1.455m-4.94-1.455H5.25m13.099-7.5a3 3 0 1 1-5.197 0m5.197 0a2.999 2.999 0 0 0-5.198 0m5.198 0h.401a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h7.901"/>`,
      }, children);
    };
  },
});
