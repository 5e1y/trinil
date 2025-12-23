import { defineComponent, h } from 'vue';

export const Timeline = defineComponent({
  name: 'Timeline',
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
        innerHTML: `<path d="M12 12.5H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h8m0 2.5h4a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1h-4m0 2.5V10m0 2.5V15m0-5V8m0 9.5H8a1 1 0 0 1-1-1V16a1 1 0 0 1 1-1h4m0 2.5h8a1 1 0 0 0 1-1V16a1 1 0 0 0-1-1h-8m0 2.5V15m0 2.5V21m0-13-1.707-1.707A1 1 0 0 1 10 5.586V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.586a1 1 0 0 1-.293.707z"/>`,
      }, children);
    };
  },
});
