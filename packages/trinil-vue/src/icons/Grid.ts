import { defineComponent, h } from 'vue';

export const Grid = defineComponent({
  name: 'Grid',
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
        innerHTML: `<path d="M12 4h7a1 1 0 0 1 1 1v7m-8-8H5a1 1 0 0 0-1 1v7m8-8v8m0 8H5a1 1 0 0 1-1-1v-7m8 8h7a1 1 0 0 0 1-1v-7m-8 8v-8m0 0H4m8 0h8"/>`,
      }, children);
    };
  },
});
