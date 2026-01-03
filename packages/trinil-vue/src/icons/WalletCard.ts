import { defineComponent, h } from 'vue';

export const WalletCard = defineComponent({
  name: 'WalletCard',
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
        innerHTML: `<path d="m5.764 5.262 10.142-2.718a1.5 1.5 0 0 1 1.838 1.06l.44 1.646m-12.42.012a1.5 1.5 0 0 0-1.06 1.837l1.514 5.65m-.454-7.487L5.25 5.25a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3h-.566m.566 7.5h-4.5a2.25 2.25 0 0 1-4.38.729m0 0a2.3 2.3 0 0 1-.12-.73H6.218m3.653.73 8.365-2.241a1.5 1.5 0 0 0 1.06-1.838l-1.112-4.15m-11.966 7.5H5.25"/>`,
      }, children);
    };
  },
});
