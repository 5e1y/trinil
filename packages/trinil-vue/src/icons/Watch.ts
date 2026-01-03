import { defineComponent, h } from 'vue';

export const Watch = defineComponent({
  name: 'Watch',
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
        innerHTML: `<path d="M17.25 7.757A6.72 6.72 0 0 1 18.75 12a6.72 6.72 0 0 1-1.5 4.243m0-8.486A6.74 6.74 0 0 0 12 5.25c-2.12 0-4.013.978-5.25 2.507m10.5 0V3.75a1.5 1.5 0 0 0-1.5-1.5h-7.5a1.5 1.5 0 0 0-1.5 1.5v4.007m0 0A6.72 6.72 0 0 0 5.25 12c0 1.608.562 3.084 1.5 4.243m0 0A6.74 6.74 0 0 0 12 18.75c2.12 0 4.012-.978 5.25-2.507m-10.5 0v4.007a1.5 1.5 0 0 0 1.5 1.5h7.5a1.5 1.5 0 0 0 1.5-1.5v-4.007m-7.5-4.993 2.25 1.5 3-2.25"/>`,
      }, children);
    };
  },
});
