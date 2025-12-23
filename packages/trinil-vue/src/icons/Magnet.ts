import { defineComponent, h } from 'vue';

export const Magnet = defineComponent({
  name: 'Magnet',
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
        innerHTML: `<path d="M14 15v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4m-6 0v-2.5a2 2 0 1 0-4 0V15m4 0h6m0 0v-3a8 8 0 1 0-16 0v3m6 0v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4m6 0H4"/>`,
      }, children);
    };
  },
});
