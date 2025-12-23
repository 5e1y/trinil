import { defineComponent, h } from 'vue';

export const Roughness = defineComponent({
  name: 'Roughness',
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
        innerHTML: `<path d="m12 12 6.364 6.364M15 9l5.614 5.614M9 15l5.614 5.614m6-6a9 9 0 1 0-6 6m6-6a9 9 0 0 1-2.25 3.75m0 0a9 9 0 0 1-3.75 2.25"/>`,
      }, children);
    };
  },
});
