import { defineComponent, h } from 'vue';

export const Euro = defineComponent({
  name: 'Euro',
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
        innerHTML: `<path d="M7.5 10V8a5 5 0 0 1 10 0m-10 2v4.5m0-4.5H5m2.5 0H13m-5.5 4.5V16a5 5 0 0 0 10 0m-10-1.5H5m2.5 0H13"/>`,
      }, children);
    };
  },
});
