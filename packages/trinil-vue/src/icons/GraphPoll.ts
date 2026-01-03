import { defineComponent, h } from 'vue';

export const GraphPoll = defineComponent({
  name: 'GraphPoll',
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
        innerHTML: `<path d="M21.75 20.25h-18a1.5 1.5 0 0 1-1.5-1.5v-1.5m0 0h7.5V13.5h-7.5m0 3.75V13.5m0 0v-3m0 0h15V6.75h-15m0 3.75V6.75m0-3v3"/>`,
      }, children);
    };
  },
});
