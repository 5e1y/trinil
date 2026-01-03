import { defineComponent, h } from 'vue';

export const Leave = defineComponent({
  name: 'Leave',
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
        innerHTML: `<path d="m3 3 11.175 1.315a6.9 6.9 0 0 1 2.913 1.036c3.617 2.302 4.3 7.302 1.431 10.489l-1.269 1.41M3 3l1.315 11.175a6.9 6.9 0 0 0 1.036 2.913c2.302 3.617 7.302 4.3 10.489 1.431l1.41-1.269M3 3l7.5 7.5M21 21l-3.75-3.75m0 0L15 15m0 0V9m0 6-4.5-4.5M15 15H9m1.5-4.5v-3m0 3h-3"/>`,
      }, children);
    };
  },
});
