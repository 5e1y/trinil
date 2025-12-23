import { defineComponent, h } from 'vue';

export const H3 = defineComponent({
  name: 'H3',
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
        innerHTML: `<path d="M5 4.5V12m0 0v7.5M5 12h9m0 0V4.5m0 7.5v7.5m5-2.5h-.5m.5 0 .317-.158a1.236 1.236 0 0 0-.553-2.342H18.5a1.5 1.5 0 0 0-1.415 1M19 17l.317.158a1.236 1.236 0 0 1-.553 2.342H18.5a1.5 1.5 0 0 1-1.415-1"/>`,
      }, children);
    };
  },
});
