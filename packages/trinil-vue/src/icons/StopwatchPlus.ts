import { defineComponent, h } from 'vue';

export const StopwatchPlus = defineComponent({
  name: 'StopwatchPlus',
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
        innerHTML: `<path d="M12 6V3m0 3a7.5 7.5 0 1 0 1.839 14.773M12 6c1.366 0 2.647.365 3.75 1.004M12 3h2m-2 0h-2m5.75 4.004L16.5 5.5m-.75 1.504a7.5 7.5 0 0 1 3.745 6.223M16.5 11l-4.441 3.454a.1.1 0 0 1-.12.003L8.5 12m9.5 6v-2.5m0 2.5h2.5M18 18v2.5m0-2.5h-2.5m3.995-4.773a5 5 0 0 0-5.656 7.546m5.656-7.546A5.002 5.002 0 0 1 18 23a5 5 0 0 1-4.161-2.227"/>`,
      }, children);
    };
  },
});
