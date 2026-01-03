import { defineComponent, h } from 'vue';

export const Timeline = defineComponent({
  name: 'Timeline',
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
        innerHTML: `<path d="M12 19.5H6v-3.75h6m0 3.75h9v-3.75h-9m0 3.75v-3.75m0 3.75v2.25m0-6v-3m0 0H3V9h9m0 3.75h6V9h-6m0 3.75V9m0 0V7.5m0 0-1.81-1.81a1.5 1.5 0 0 1-.44-1.061V3.75a1.5 1.5 0 0 1 1.5-1.5h1.5a1.5 1.5 0 0 1 1.5 1.5v.879a1.5 1.5 0 0 1-.44 1.06z"/>`,
      }, children);
    };
  },
});
