import { defineComponent, h } from 'vue';

export const Move = defineComponent({
  name: 'Move',
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
        innerHTML: `<path d="M16.5 12h5.25m0 0-3-3m3 3-3 3M7.5 12H2.25m0 0 3-3m-3 3 3 3M12 16.5v5.25m0 0 3-3m-3 3-3-3M12 7.5V2.25m0 0 3 3m-3-3-3 3M12.75 12a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0"/>`,
      }, children);
    };
  },
});
