import { defineComponent, h } from 'vue';

export const Assistance = defineComponent({
  name: 'Assistance',
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
        innerHTML: `<path d="M19.5 11.25v-1.5a7.5 7.5 0 0 0-15 0v1.5h3.256m4.244 3a4.5 4.5 0 0 1-4.244-3m4.244 3a4.5 4.5 0 1 0-4.244-3m4.244 3h2.25a6 6 0 0 1 6 6 1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5 6 6 0 0 1 6-6zm-4.244-3h3.494"/>`,
      }, children);
    };
  },
});
