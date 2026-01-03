import { defineComponent, h } from 'vue';

export const HourglassEnd = defineComponent({
  name: 'HourglassEnd',
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
        innerHTML: `<path d="M3.75 20.25v-1.146a5.43 5.43 0 0 1 3-4.854l2.33-1.165a1.214 1.214 0 0 0 0-2.17L6.75 9.75a5.43 5.43 0 0 1-3-4.854V3.75a1.5 1.5 0 0 1 1.5-1.5h13.5a1.5 1.5 0 0 1 1.5 1.5v1.146a5.43 5.43 0 0 1-3 4.854l-2.33 1.165a1.214 1.214 0 0 0 0 2.17l2.33 1.165c1.839.92 3 2.799 3 4.854v1.146a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5m5.769-3.75h.054c1.028 0 1.967-.58 2.427-1.5.46.92 1.4 1.5 2.427 1.5h.054a2.8 2.8 0 0 1 2.657 1.915l.112.335H6.75l.112-.335A2.8 2.8 0 0 1 9.519 16.5" clip-rule="evenodd"/>`,
      }, children);
    };
  },
});
