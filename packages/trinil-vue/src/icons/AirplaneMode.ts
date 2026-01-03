import { defineComponent, h } from 'vue';

export const AirplaneMode = defineComponent({
  name: 'AirplaneMode',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="m20.818 11.068.932.932-.932.932a4.5 4.5 0 0 1-3.182 1.318H15l-3.626 6.044A3 3 0 0 1 8.8 21.75H7.5l2.25-7.5H6l-.61.914A3 3 0 0 1 2.895 16.5H2.25L3 12.75 2.25 12l.75-.75-.75-3.75h.644a3 3 0 0 1 2.497 1.336L6 9.75h3.75L7.5 2.25h1.301a3 3 0 0 1 2.573 1.457L15 9.75h2.636a4.5 4.5 0 0 1 3.182 1.318"/>`,
      }, children);
    };
  },
});
