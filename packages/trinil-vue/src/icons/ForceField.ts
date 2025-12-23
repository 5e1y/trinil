import { defineComponent, h } from 'vue';

export const ForceField = defineComponent({
  name: 'ForceField',
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
        innerHTML: `<path d="M17.595 4A14.43 14.43 0 0 1 20 12c0 2.957-.885 5.707-2.405 8m-6.97-16A9.5 9.5 0 0 1 15 12a9.5 9.5 0 0 1-4.374 8M4 16.771A5 5 0 1 0 4 7.23M7 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>`,
      }, children);
    };
  },
});
