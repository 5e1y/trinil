import { defineComponent, h } from 'vue';

export const ShieldCross = defineComponent({
  name: 'ShieldCross',
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
        innerHTML: `<path d="m18 18 1.5-1.5M18 18l1.5 1.5M18 18l-1.5 1.5M18 18l-1.5-1.5m2.442-3.411a5 5 0 0 0-5.37 7.237m5.37-7.237A5.002 5.002 0 0 1 18 23a5 5 0 0 1-4.427-2.674m5.369-7.237q.058-.506.058-1.024V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v8.065a9 9 0 0 0 5.455 8.273l1.151.493a1 1 0 0 0 .788 0l1.151-.493.028-.012"/>`,
      }, children);
    };
  },
});
