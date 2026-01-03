import { defineComponent, h } from 'vue';

export const ReceiptCheck = defineComponent({
  name: 'ReceiptCheck',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M7.5 6H12m3 0h1.5m-9 3H12m3 0h1.5m-9 3H12m7.5-.583V3L18 2.25 16.5 3 15 2.25 13.5 3 12 2.25 10.5 3 9 2.25 7.5 3 6 2.25 4.5 3v18.75L6 21l1.5.75L9 21l1.5.75 1.461-.73m2.289-2.27 2.894 2.894a.15.15 0 0 0 .212 0l4.91-4.91"/>`,
      }, children);
    };
  },
});
