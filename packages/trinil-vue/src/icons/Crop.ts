import { defineComponent, h } from 'vue';

export const Crop = defineComponent({
  name: 'Crop',
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
        innerHTML: `<path d="M6 2.25V6m0 0v10.5A1.5 1.5 0 0 0 7.5 18H18M6 6H2.25M6 6h10.5A1.5 1.5 0 0 1 18 7.5V18m0 0h3.75M18 18v3.75"/>`,
      }, children);
    };
  },
});
