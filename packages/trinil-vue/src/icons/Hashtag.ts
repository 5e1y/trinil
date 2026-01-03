import { defineComponent, h } from 'vue';

export const Hashtag = defineComponent({
  name: 'Hashtag',
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
        innerHTML: `<path d="m18 2.25-1.385 6m0 0-1.73 7.5m1.73-7.5h3.635m-3.635 0h-7.5m5.77 7.5-1.385 6m1.385-6h3.865m-3.865 0h-7.5m1.73-7.5H5.25m3.865 0 1.385-6m-1.385 6-1.73 7.5m0 0H3.75m3.635 0L6 21.75"/>`,
      }, children);
    };
  },
});
