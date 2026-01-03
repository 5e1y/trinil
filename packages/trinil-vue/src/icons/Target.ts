import { defineComponent, h } from 'vue';

export const Target = defineComponent({
  name: 'Target',
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
        innerHTML: `<path d="M12 5.25v-3m0 3A6.75 6.75 0 0 0 5.25 12M12 5.25A6.75 6.75 0 0 1 18.75 12m0 0h3m-3 0A6.75 6.75 0 0 1 12 18.75M5.25 12h-3m3 0A6.75 6.75 0 0 0 12 18.75m0 0v3M15 12a3 3 0 1 0-6 0 3 3 0 0 0 6 0"/>`,
      }, children);
    };
  },
});
