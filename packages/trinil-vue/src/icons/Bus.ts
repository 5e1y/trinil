import { defineComponent, h } from 'vue';

export const Bus = defineComponent({
  name: 'Bus',
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
        innerHTML: `<path d="M9.5 17a2 2 0 1 0 4 0m-4 0a2 2 0 1 1 4 0m-4 0H3m10.5 0h3m-3 0V9a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v8M3 5.5h14a2 2 0 0 1 2 2V8m0 0v8a1 1 0 0 1-1 1h-1.5M19 8h1a1 1 0 0 1 1 1v3M3 12h7a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H3"/>`,
      }, children);
    };
  },
});
