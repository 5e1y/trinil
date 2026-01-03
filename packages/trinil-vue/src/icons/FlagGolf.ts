import { defineComponent, h } from 'vue';

export const FlagGolf = defineComponent({
  name: 'FlagGolf',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M12 15.75a3.75 3.75 0 0 0-3.75 3.75v.75a1.5 1.5 0 0 0 1.5 1.5h4.5a1.5 1.5 0 0 0 1.5-1.5v-.75A3.75 3.75 0 0 0 12 15.75m0 0a41.6 41.6 0 0 0-.435-6m0 0a41.6 41.6 0 0 0-1.7-7.154L9.75 2.25 18 4.5z"/>`,
      }, children);
    };
  },
});
