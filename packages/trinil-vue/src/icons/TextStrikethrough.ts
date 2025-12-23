import { defineComponent, h } from 'vue';

export const TextStrikethrough = defineComponent({
  name: 'TextStrikethrough',
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
        innerHTML: `<path d="M3.866 13h8m0 0h8m-8 0c1.645.36 3.52.75 4.262 2.261a3.637 3.637 0 0 1-3.265 5.239H11.5a4 4 0 0 1-4-4m2.16-6.04a3.637 3.637 0 0 1 1.477-6.96H12.5a4 4 0 0 1 4 4"/>`,
      }, children);
    };
  },
});
