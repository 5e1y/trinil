import { defineComponent, h } from 'vue';

export const Charger = defineComponent({
  name: 'Charger',
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
        innerHTML: `<path d="M6.75 15.75h-1.5a1.5 1.5 0 0 1-1.5-1.5v-9a3 3 0 0 1 3-3h10.5a3 3 0 0 1 3 3v9a1.5 1.5 0 0 1-1.5 1.5h-1.5m-10.5 0v4.5a1.5 1.5 0 0 0 3 0v-4.5m-3 0h3m0 0h4.5m0 0v4.5a1.5 1.5 0 0 0 3 0v-4.5m-3 0h3M13.5 6l-3 3h3l-3 3"/>`,
      }, children);
    };
  },
});
