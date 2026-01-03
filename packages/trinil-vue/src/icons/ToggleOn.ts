import { defineComponent, h } from 'vue';

export const ToggleOn = defineComponent({
  name: 'ToggleOn',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M9 5.25h6a6.75 6.75 0 0 1 0 13.5H9a6.75 6.75 0 0 1 0-13.5m6 10.5a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5" clip-rule="evenodd"/>`,
      }, children);
    };
  },
});
