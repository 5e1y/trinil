import { defineComponent, h } from 'vue';

export const Fullscreen = defineComponent({
  name: 'Fullscreen',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M21 15v4.5a1.5 1.5 0 0 1-1.5 1.5H15m6-12V4.5A1.5 1.5 0 0 0 19.5 3H15M9 3H4.5A1.5 1.5 0 0 0 3 4.5V9m0 6v4.5A1.5 1.5 0 0 0 4.5 21H9"/>`,
      }, children);
    };
  },
});
