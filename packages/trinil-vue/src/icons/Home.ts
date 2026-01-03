import { defineComponent, h } from 'vue';

export const Home = defineComponent({
  name: 'Home',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M3 9.764V19.5A1.5 1.5 0 0 0 4.5 21h2.25a1.5 1.5 0 0 0 1.5-1.5v-5.25a1.5 1.5 0 0 1 1.5-1.5h4.5a1.5 1.5 0 0 1 1.5 1.5v5.25a1.5 1.5 0 0 0 1.5 1.5h2.25a1.5 1.5 0 0 0 1.5-1.5V9.764c0-.48-.23-.931-.618-1.213l-7.025-5.11a2.31 2.31 0 0 0-2.714 0l-7.025 5.11A1.5 1.5 0 0 0 3 9.764"/>`,
      }, children);
    };
  },
});
