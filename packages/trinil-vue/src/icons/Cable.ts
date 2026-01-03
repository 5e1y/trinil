import { defineComponent, h } from 'vue';

export const Cable = defineComponent({
  name: 'Cable',
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
        innerHTML: `<path d="M6 8.25v6c0 1.535.698 3.07 2.451 3.89M6 8.25A2.25 2.25 0 0 1 3.75 6V2.25h4.5V6A2.25 2.25 0 0 1 6 8.25m12 3v6s0 4.5-5.25 4.5c-2.366 0-3.799-1.632-4.299-3.61M18 11.25A2.25 2.25 0 0 0 20.25 9V5.25h-4.5V9A2.25 2.25 0 0 0 18 11.25m-9.549 6.89a6.7 6.7 0 0 1-.201-1.64c0-3 1.511-4.5 3.375-4.5a3.375 3.375 0 1 1 0 6.75c-1.311 0-2.357-.227-3.174-.61"/>`,
      }, children);
    };
  },
});
