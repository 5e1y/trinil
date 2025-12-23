import { defineComponent, h } from 'vue';

export const AlignStart = defineComponent({
  name: 'AlignStart',
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
        innerHTML: `<path d="M3 4.5v15M6 8v1.5a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1Zm0 6.5V16a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-1.5a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1Z"/>`,
      }, children);
    };
  },
});
