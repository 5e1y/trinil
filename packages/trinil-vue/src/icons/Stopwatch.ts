import { defineComponent, h } from 'vue';

export const Stopwatch = defineComponent({
  name: 'Stopwatch',
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
        innerHTML: `<path d="M12 5.25v-3m0 3c1.983 0 3.802.7 5.224 1.865M12 5.25c-1.982 0-3.802.7-5.224 1.865a8.25 8.25 0 1 0 10.449 0M12 2.25H9m3 0h3M8.25 12 12 15l4.5-3.75m.724-4.135L18.75 5.25"/>`,
      }, children);
    };
  },
});
