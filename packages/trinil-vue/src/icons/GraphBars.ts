import { defineComponent, h } from 'vue';

export const GraphBars = defineComponent({
  name: 'GraphBars',
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
        innerHTML: `<path d="M3 4.5V18a1 1 0 0 0 1 1h3m0 0v-4.5M7 19h4m0 0v-8.5m0 8.5h4m0 0v-6.5m0 6.5h4m2.5 0H19m0 0V6.5"/>`,
      }, children);
    };
  },
});
