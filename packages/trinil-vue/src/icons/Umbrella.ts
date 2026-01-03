import { defineComponent, h } from 'vue';

export const Umbrella = defineComponent({
  name: 'Umbrella',
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
        innerHTML: `<path d="M12 10.447c1.357 0 2.714.518 3.75 1.553a3.842 3.842 0 0 1 6 0c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a3.842 3.842 0 0 1 6 0A5.29 5.29 0 0 1 12 10.447m0 0V19.5a2.25 2.25 0 0 1-4.5 0V18"/>`,
      }, children);
    };
  },
});
