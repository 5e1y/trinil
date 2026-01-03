import { defineComponent, h } from 'vue';

export const Capsules = defineComponent({
  name: 'Capsules',
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
        innerHTML: `<path d="M4.5 3.75v16.5a1.5 1.5 0 0 0 1.5 1.5h12a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5H6a1.5 1.5 0 0 0-1.5 1.5m3 4.5v-1.5a1.5 1.5 0 1 1 3 0v1.5a1.5 1.5 0 1 1-3 0m0 9v-1.5a1.5 1.5 0 0 1 3 0v1.5a1.5 1.5 0 0 1-3 0m9 0v-1.5a1.5 1.5 0 0 0-3 0v1.5a1.5 1.5 0 0 0 3 0m0-10.5v1.5a1.5 1.5 0 0 1-3 0v-1.5a1.5 1.5 0 0 1 3 0" clip-rule="evenodd"/>`,
      }, children);
    };
  },
});
