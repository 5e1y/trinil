import { defineComponent, h } from 'vue';

export const H2 = defineComponent({
  name: 'H2',
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
        innerHTML: `<path d="M2.25 20.25V12m0 0V3.75m0 8.25h10.5m0 8.25V12m0 0V3.75m9 16.5h-4.5l3.879-3.879a2.121 2.121 0 0 0-1.5-3.621H19.5A2.25 2.25 0 0 0 17.25 15"/>`,
      }, children);
    };
  },
});
