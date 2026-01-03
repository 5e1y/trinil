import { defineComponent, h } from 'vue';

export const Wheelchair = defineComponent({
  name: 'Wheelchair',
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
        innerHTML: `<path d="M6 9.566a6 6 0 1 0 9.561 3.184M6 9.566a6.003 6.003 0 0 1 9.561 3.184M6 9.566V5.25a1.5 1.5 0 0 0-1.5-1.5H2.25m13.311 9h3.189a1.5 1.5 0 0 1 1.5 1.5v3m0 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-9.75-3a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0"/>`,
      }, children);
    };
  },
});
