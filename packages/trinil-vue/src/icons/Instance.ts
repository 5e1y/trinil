import { defineComponent, h } from 'vue';

export const Instance = defineComponent({
  name: 'Instance',
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
        innerHTML: `<path d="m20.69 10.94-7.63-7.63a1.5 1.5 0 0 0-2.12 0l-7.63 7.63a1.5 1.5 0 0 0 0 2.12l7.63 7.63a1.5 1.5 0 0 0 2.12 0l7.63-7.63a1.5 1.5 0 0 0 0-2.12"/>`,
      }, children);
    };
  },
});
