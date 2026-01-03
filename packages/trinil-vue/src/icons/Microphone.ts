import { defineComponent, h } from 'vue';

export const Microphone = defineComponent({
  name: 'Microphone',
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
        innerHTML: `<path d="M18.75 11.25V12A6.75 6.75 0 0 1 12 18.75m-6.75-7.5V12A6.75 6.75 0 0 0 12 18.75m-3.75 3H12m0 0h3.75m-3.75 0v-3M8.25 6v6a3.75 3.75 0 1 0 7.5 0V6a3.75 3.75 0 1 0-7.5 0"/>`,
      }, children);
    };
  },
});
