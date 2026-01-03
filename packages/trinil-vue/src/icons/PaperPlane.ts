import { defineComponent, h } from 'vue';

export const PaperPlane = defineComponent({
  name: 'PaperPlane',
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
        innerHTML: `<path d="m21.75 2.25-5.25 19.5-4.5-4.5m9.75-15L2.25 7.5l4.5 4.5m15-9.75L6.75 12m15-9.75-9.75 15m0 0-6.75 1.5L6.75 12"/>`,
      }, children);
    };
  },
});
