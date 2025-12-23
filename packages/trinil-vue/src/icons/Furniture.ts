import { defineComponent, h } from 'vue';

export const Furniture = defineComponent({
  name: 'Furniture',
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
        innerHTML: `<path d="M8 7.5H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2m2-9h8m-8 0v9m8-9h4a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2m-2-9V12m2 4.5H6m12 0V18M6 16.5V18m10-6v4.5m0-4.5H8m-2.5 1v-2m13 2v-2"/>`,
      }, children);
    };
  },
});
