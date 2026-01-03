import { defineComponent, h } from 'vue';

export const BoundingBox = defineComponent({
  name: 'BoundingBox',
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
        innerHTML: `<path d="M18.75 16.5v-9m0 9a2.25 2.25 0 0 0-2.25 2.25m2.25-2.25a2.25 2.25 0 1 1-2.25 2.25M18.75 7.5a2.25 2.25 0 0 1-2.25-2.25m2.25 2.25a2.25 2.25 0 1 0-2.25-2.25m0 0h-9m0 0A2.25 2.25 0 0 1 5.25 7.5M7.5 5.25A2.25 2.25 0 1 0 5.25 7.5m0 0v9m0 0a2.25 2.25 0 1 0 2.25 2.25M5.25 16.5a2.25 2.25 0 0 1 2.25 2.25m0 0h9"/>`,
      }, children);
    };
  },
});
