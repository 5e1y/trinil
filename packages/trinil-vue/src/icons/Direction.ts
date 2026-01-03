import { defineComponent, h } from 'vue';

export const Direction = defineComponent({
  name: 'Direction',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M12 21h9V3H3v18zm0 0v-6.75m6-6h-3a3 3 0 0 0-3 3v3m6-6L15.75 6M18 8.25l-2.25 2.25M12 14.25H6m0 0L8.25 12M6 14.25l2.25 2.25"/>`,
      }, children);
    };
  },
});
