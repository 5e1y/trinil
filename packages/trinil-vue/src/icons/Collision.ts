import { defineComponent, h } from 'vue';

export const Collision = defineComponent({
  name: 'Collision',
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
        innerHTML: `<path d="m18.75 16.5 3 .75m-5.25 1.5.75 3M7.5 5.25l-.75-3M5.25 7.5l-3-.75m11.25 9.375a5.625 5.625 0 1 0-11.25 0 5.625 5.625 0 0 0 11.25 0m8.25-8.25a5.625 5.625 0 1 0-11.25 0 5.625 5.625 0 0 0 11.25 0"/>`,
      }, children);
    };
  },
});
