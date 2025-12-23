import { defineComponent, h } from 'vue';

export const RadioAlt = defineComponent({
  name: 'RadioAlt',
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
        innerHTML: `<path d="M16.5 8.5H4a1 1 0 0 0-1 1V18a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9.5a1 1 0 0 0-1-1zm0 0 4-4m-4 4-4-4m1.5 11h3.5m0 0h1m-1 0V14m0 1.5V17m-6-3.25a3.25 3.25 0 1 0-6.5 0 3.25 3.25 0 0 0 6.5 0Z"/>`,
      }, children);
    };
  },
});
