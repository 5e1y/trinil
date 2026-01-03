import { defineComponent, h } from 'vue';

export const ArrowMove = defineComponent({
  name: 'ArrowMove',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="m21.75 12-3-3m3 3-3 3m3-3H15m-3-9.75V9m0-6.75 3 3m-3-3-3 3M2.25 12l3-3m-3 3 3 3m-3-3H9m3 3v6.75m0 0 3-3m-3 3-3-3"/>`,
      }, children);
    };
  },
});
