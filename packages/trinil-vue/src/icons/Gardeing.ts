import { defineComponent, h } from 'vue';

export const Gardeing = defineComponent({
  name: 'Gardeing',
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
        innerHTML: `<path d="M8.625 9.375 11.25 6.75 7.94 3.44A1.5 1.5 0 0 0 6.878 3H3.75a1.5 1.5 0 0 0-1.5 1.5v3.129c0 .398.158.779.44 1.06L6 12zm0 0L12 12.75m0 0 4.5 4.5m-4.5-4.5L3.75 21M12 12.75l4.875-4.875M16.5 17.25h3l1.5 1.5-3 3-1.5-1.5zm.375-9.375L15.75 6.75m1.125 1.125L18 9m3.75.75-1.5 1.5L18 9m-3-6-1.5 1.5 2.25 2.25m0 0 1.5-1.5M18 9l1.5-1.5"/>`,
      }, children);
    };
  },
});
