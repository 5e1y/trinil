import { defineComponent, h } from 'vue';

export const Opacity = defineComponent({
  name: 'Opacity',
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
        innerHTML: `<path d="M9.476 2.58a9.7 9.7 0 0 1 5.047.002c5.202 1.394 8.289 6.74 6.895 11.942a9.746 9.746 0 0 1-11.941 6.894M5.105 5.105a9.7 9.7 0 0 0-2.523 4.371m2.523 9.42a9.8 9.8 0 0 1-2.524-4.372"/>`,
      }, children);
    };
  },
});
