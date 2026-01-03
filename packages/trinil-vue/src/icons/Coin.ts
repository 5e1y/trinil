import { defineComponent, h } from 'vue';

export const Coin = defineComponent({
  name: 'Coin',
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
        innerHTML: `<path d="M11.25 10.5h-1.5m0 0H9m.75 0v-.75a2.25 2.25 0 0 1 4.5 0v.75m-4.5 0v3m1.5 0h-1.5m0 0H9m.75 0v.75a2.25 2.25 0 0 0 4.5 0v-.75m7.5-1.5c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75"/>`,
      }, children);
    };
  },
});
