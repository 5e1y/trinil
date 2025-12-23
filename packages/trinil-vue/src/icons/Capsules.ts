import { defineComponent, h } from 'vue';

export const Capsules = defineComponent({
  name: 'Capsules',
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
        innerHTML: `<path d="M5 20V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1Zm5-2H8.5a1 1 0 1 1 0-2H10a1 1 0 1 1 0 2Zm5.5 0H14a1 1 0 1 1 0-2h1.5a1 1 0 1 1 0 2ZM10 13H8.5a1 1 0 1 1 0-2H10a1 1 0 1 1 0 2Zm5.5 0H14a1 1 0 1 1 0-2h1.5a1 1 0 1 1 0 2ZM10 8H8.5a1 1 0 1 1 0-2H10a1 1 0 1 1 0 2Zm5.5 0H14a1 1 0 1 1 0-2h1.5a1 1 0 1 1 0 2Z" clip-rule="evenodd"/>`,
      }, children);
    };
  },
});
