import { defineComponent, h } from 'vue';

export const Hashtag = defineComponent({
  name: 'Hashtag',
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
        innerHTML: `<path d="m17 4-1.25 5m0 0-1.5 6m1.5-6h-6m6 0h2.75m-4.25 6L13 20m1.25-5h3.25m-3.25 0h-6M7 20l1.25-5m0 0 1.5-6m-1.5 6H5.5m4.25-6L11 4M9.75 9H6.5"/>`,
      }, children);
    };
  },
});
