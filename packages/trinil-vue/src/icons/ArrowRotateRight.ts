import { defineComponent, h } from 'vue';

export const ArrowRotateRight = defineComponent({
  name: 'ArrowRotateRight',
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
        innerHTML: `<path d="M4 12a8 8 0 0 1 14.423-4.77m0 0L18.5 3m-.077 4.23H14M20 12a8 8 0 0 1-14.423 4.77m0 0L5.5 21m.077-4.23H10"/>`,
      }, children);
    };
  },
});
