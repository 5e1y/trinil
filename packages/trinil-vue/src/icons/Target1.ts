import { defineComponent, h } from 'vue';

export const Target1 = defineComponent({
  name: 'Target1',
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
        innerHTML: `<path d="M12 2v3m0 0a7 7 0 0 1 7 7m-7-7a7 7 0 0 0-7 7m17 0h-3m0 0a7 7 0 0 1-7 7m0 3v-3m0 0a7 7 0 0 1-7-7m-3 0h3m10.5 0a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0Z"/>`,
      }, children);
    };
  },
});
