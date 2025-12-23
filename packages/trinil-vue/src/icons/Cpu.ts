import { defineComponent, h } from 'vue';

export const Cpu = defineComponent({
  name: 'Cpu',
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
        innerHTML: `<path d="M19 7.5V6a1 1 0 0 0-1-1h-1.5M19 7.5h2m-2 0v3m0 0h2m-2 0v3m0 0v3m0-3h2m-2 3V18a1 1 0 0 1-1 1h-1.5m2.5-2.5h2M7.5 5H6a1 1 0 0 0-1 1v1.5M7.5 5h3m-3 0V3m3 2h3m-3 0V3m3 2h3m-3 0V3m3 2V3m0 16h-3m3 0v2m-3-2h-3m3 0v2m-3-2h-3m3 0v2m-3-2H6a1 1 0 0 1-1-1v-1.5M7.5 19v2M5 16.5v-3m0 3H3m2-3v-3m0 3H3m2-3v-3m0 3H3m2-3H3M8 9v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1Z"/>`,
      }, children);
    };
  },
});
