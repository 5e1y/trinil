import { defineComponent, h } from 'vue';

export const ClipboardCheck = defineComponent({
  name: 'ClipboardCheck',
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
        innerHTML: `<path d="M8.5 4.5V4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v.5m-7 0V6a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V4.5m-7 0H6a1 1 0 0 0-1 1V20a1 1 0 0 0 1 1h8m1.5-16.5H18a1 1 0 0 1 1 1v7.6m4 4.9a5 5 0 0 1-5 5m5-5a5 5 0 0 0-4-4.9m4 4.9a5 5 0 0 0-5-5m0 10a5 5 0 0 1-4-2m4 2a5 5 0 0 1-5-5m0 0a5 5 0 0 1 5-5m-5 5c0 1.126.372 2.164 1 3m4-8q.515 0 1 .1M16 18l1.43 1.43a.1.1 0 0 0 .14 0L20 17"/>`,
      }, children);
    };
  },
});
