import { defineComponent, h } from 'vue';

export const Moon = defineComponent({
  name: 'Moon',
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
        innerHTML: `<path d="M10 21A9 9 0 1 0 5.58 4.158a.7.7 0 0 0-.278.907c.12.265.386.431.676.452a6.5 6.5 0 0 1 0 12.966.8.8 0 0 0-.676.452.7.7 0 0 0 .279.907A8.96 8.96 0 0 0 10 21Z"/>`,
      }, children);
    };
  },
});
