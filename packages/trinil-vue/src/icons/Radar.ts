import { defineComponent, h } from 'vue';

export const Radar = defineComponent({
  name: 'Radar',
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
        innerHTML: `<path d="M12 13a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm0 0v8m2.5-6.169a5 5 0 1 0-5 0m6.258 2.16a7.5 7.5 0 1 0-7.48.021"/>`,
      }, children);
    };
  },
});
