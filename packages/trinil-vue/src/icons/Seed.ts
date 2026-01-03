import { defineComponent, h } from 'vue';

export const Seed = defineComponent({
  name: 'Seed',
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
        innerHTML: `<path d="M12 14.25v-7.5m0 7.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5m0-7.5c0-3-4.5-5.25-8.25-3.75 0 4.5 6 5.25 8.25 3.75m0 3.75c0-3 4.5-5.25 8.25-3.75 0 4.5-6 5.25-8.25 3.75"/>`,
      }, children);
    };
  },
});
