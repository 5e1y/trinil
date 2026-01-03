import { defineComponent, h } from 'vue';

export const Component = defineComponent({
  name: 'Component',
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
        innerHTML: `<path d="M6 15.75 2.25 12 6 8.25 9.75 12zM12 9.75 8.25 6 12 2.25 15.75 6zM12 21.75 8.25 18 12 14.25 15.75 18zM18 15.75 14.25 12 18 8.25 21.75 12z"/>`,
      }, children);
    };
  },
});
