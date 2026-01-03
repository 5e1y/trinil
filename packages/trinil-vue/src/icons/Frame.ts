import { defineComponent, h } from 'vue';

export const Frame = defineComponent({
  name: 'Frame',
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
        innerHTML: `<path d="M6.75 2.25v4.5m0 0v10.5m0-10.5h10.5m-10.5 0h-4.5m4.5 10.5v4.5m0-4.5h10.5m-10.5 0h-4.5m15-15v4.5m0 0v10.5m0-10.5h4.5m-4.5 10.5v4.5m0-4.5h4.5"/>`,
      }, children);
    };
  },
});
