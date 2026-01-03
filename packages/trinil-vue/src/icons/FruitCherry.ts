import { defineComponent, h } from 'vue';

export const FruitCherry = defineComponent({
  name: 'FruitCherry',
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
        innerHTML: `<path d="M8.11 14.149a3.75 3.75 0 1 1-4.219 6.202 3.75 3.75 0 0 1 4.218-6.202m0 0c2.39-2.9 3.89-6.65 3.89-11.15m0 0c.715 4.405 1.402 5.898 4.036 8.806M12 3c-2.366-.423-7.177.035-7.5 5.25C6.25 9 10.2 9 12 3m4.036 8.805a3.75 3.75 0 1 0 3.928 6.39 3.75 3.75 0 0 0-3.928-6.39"/>`,
      }, children);
    };
  },
});
