import { defineComponent, h } from 'vue';

export const Share = defineComponent({
  name: 'Share',
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
        innerHTML: `<path d="M9.146 5a.35.35 0 0 0-.25.104l-5.189 5.189a1 1 0 0 0 0 1.414l5.19 5.19a.353.353 0 0 0 .603-.25V15a1 1 0 0 1 1-1h1.377a9 9 0 0 1 7.204 3.605l1.319 1.761a.333.333 0 0 0 .6-.2V17a9 9 0 0 0-9-9h-1.5a1 1 0 0 1-1-1V5.354A.354.354 0 0 0 9.146 5Z"/>`,
      }, children);
    };
  },
});
