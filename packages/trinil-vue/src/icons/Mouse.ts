import { defineComponent, h } from 'vue';

export const Mouse = defineComponent({
  name: 'Mouse',
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
        innerHTML: `<path d="M15 8.25h-1.5c-2.25 0-3.75 1.343-3.75 3v5.25a5.25 5.25 0 1 0 10.5 0v-5.25c0-1.657-1.5-3-3.75-3zm0 0v5.25m0-5.25C15 7 14.476 4.5 12 4.5s-2.424.789-4.447.789S4.5 4.5 4.5 3.687"/>`,
      }, children);
    };
  },
});
