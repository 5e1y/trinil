import { defineComponent, h } from 'vue';

export const Shuffle = defineComponent({
  name: 'Shuffle',
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
        innerHTML: `<path d="M20 17h-2.658a6 6 0 0 1-5.101-2.842L10.905 12M20 17l-3-3m3 3-3 3m-6.095-8L9.342 9.476A6.28 6.28 0 0 0 4 6.5m6.905 5.5 1.336-2.158A6 6 0 0 1 17.342 7H20m-9.095 5-1.563 2.524A6.28 6.28 0 0 1 4 17.5M20 7l-3 3m3-3-3-3"/>`,
      }, children);
    };
  },
});
