import { defineComponent, h } from 'vue';

export const Magnet = defineComponent({
  name: 'Magnet',
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
        innerHTML: `<path d="M3 15v4.5A1.5 1.5 0 0 0 4.5 21h4.125c.621 0 1.125-.504 1.125-1.125V15M3 15v-3a9 9 0 0 1 18 0v3M3 15h6.75m0 0v-3a2.25 2.25 0 0 1 4.5 0v3m0 0v4.875c0 .621.504 1.125 1.125 1.125H19.5a1.5 1.5 0 0 0 1.5-1.5V15m-6.75 0H21"/>`,
      }, children);
    };
  },
});
