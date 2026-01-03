import { defineComponent, h } from 'vue';

export const ToiletPaper = defineComponent({
  name: 'ToiletPaper',
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
        innerHTML: `<path d="M7.5 15.75c2.071 0 3.75-3.022 3.75-6.75S9.571 2.25 7.5 2.25m0 13.5c-2.071 0-3.75-3.022-3.75-6.75m3.75 6.75h8.25M3.75 9c0-3.728 1.679-6.75 3.75-6.75M3.75 9v11.25a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5v-4.5M7.5 2.25h9.75C19.321 2.25 21 5.272 21 9s-1.679 6.75-3.75 6.75h-1.5M8.25 9s0-1.5-.75-1.5S6.75 9 6.75 9s0 1.5.75 1.5.75-1.5.75-1.5Z"/>`,
      }, children);
    };
  },
});
