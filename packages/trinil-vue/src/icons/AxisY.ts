import { defineComponent, h } from 'vue';

export const AxisY = defineComponent({
  name: 'AxisY',
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
        innerHTML: `<path d="m7.5 16.5.75-.75m0 0 1.5.25m-1.5-.25V2.25m-3 16.5.375-.375M3 21l.375-.375M12.75 16.5l.75.125m3 .5.75.125m3 .5.75.125M8.25 2.25l-1.5 1.5m1.5-1.5 1.5 1.5"/>`,
      }, children);
    };
  },
});
