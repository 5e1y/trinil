import { defineComponent, h } from 'vue';

export const AxisZ = defineComponent({
  name: 'AxisZ',
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
        innerHTML: `<path d="m8 16.5-4 4m0 0v-2m0 2h2m4.25-3.625L11 17m2.25.375.75.125m2.25.375L17 18m2.25.375.75.125M8 5.125V6m0 2v1m0 5v.875M8 11v1"/>`,
      }, children);
    };
  },
});
