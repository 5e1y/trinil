import { defineComponent, h } from 'vue';

export const Shuffle = defineComponent({
  name: 'Shuffle',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="m21.75 6.75-3-3m3 3-3 3m3-3h-3.293a6.75 6.75 0 0 0-5.477 2.805L11.219 12m7.531 8.25 3-3m0 0-3-3m3 3h-3.293a6.75 6.75 0 0 1-5.477-2.805L11.219 12m0 0-1.76 2.445A6.75 6.75 0 0 1 3.98 17.25H2.25M11.218 12l-1.76-2.445A6.75 6.75 0 0 0 3.98 6.75H2.25"/>`,
      }, children);
    };
  },
});
