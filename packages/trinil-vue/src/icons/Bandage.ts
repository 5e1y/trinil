import { defineComponent, h } from 'vue';

export const Bandage = defineComponent({
  name: 'Bandage',
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
        innerHTML: `<path d="M3.75 20.25a5.303 5.303 0 0 1 0-7.5l9-9a5.303 5.303 0 0 1 7.5 7.5l-9 9a5.303 5.303 0 0 1-7.5 0m12-9-4.5 4.5-3-3 4.5-4.5z" clip-rule="evenodd"/>`,
      }, children);
    };
  },
});
