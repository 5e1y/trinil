import { defineComponent, h } from 'vue';

export const LightAera = defineComponent({
  name: 'LightAera',
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
        innerHTML: `<path d="M12 6V3m0 18v-3m9-6h.75m-19.5 0H3m4.5-6v-.75m-3.75 1.5-1.5-1.5M16.5 6v-.75m5.25 13.5-1.5-1.5m1.5-12-1.5 1.5m-16.5 10.5-1.5 1.5m5.25 0V18m9 .75V18M6 10.5v3A1.5 1.5 0 0 0 7.5 15h9a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 16.5 9h-9A1.5 1.5 0 0 0 6 10.5"/>`,
      }, children);
    };
  },
});
