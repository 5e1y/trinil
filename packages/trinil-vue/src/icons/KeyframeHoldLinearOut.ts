import { defineComponent, h } from 'vue';

export const KeyframeHoldLinearOut = defineComponent({
  name: 'KeyframeHoldLinearOut',
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
        innerHTML: `<path d="M11.871 3.75H3.618a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5h8.253m0-16.5H13.5a1.5 1.5 0 0 1 1.06.44l6.75 6.75a1.5 1.5 0 0 1 0 2.12l-6.75 6.75a1.5 1.5 0 0 1-1.06.44H11.87m0-16.5v16.5"/>`,
      }, children);
    };
  },
});
