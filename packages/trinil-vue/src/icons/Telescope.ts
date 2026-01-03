import { defineComponent, h } from 'vue';

export const Telescope = defineComponent({
  name: 'Telescope',
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
        innerHTML: `<path d="M14.154 11.347a2.251 2.251 0 0 1 .636 3.997m-.636-3.997L18.31 7.19a1.5 1.5 0 0 0 0-2.121L15.931 2.69a1.5 1.5 0 0 0-2.12 0L7.5 9a1.06 1.06 0 0 0 0 1.5m6.654.847L12 13.5a1.06 1.06 0 0 1-.729.31m-.771-.31-1.94 1.94a1.5 1.5 0 0 1-2.12 0l-.88-.88a1.5 1.5 0 0 1 0-2.12L7.5 10.5m3 3-3-3m3 3c.213.213.493.316.771.31m0 0a2.25 2.25 0 0 0 .939 1.534m1.29.406v6m0-6c-.48 0-.925-.15-1.29-.406m1.29.406c.48 0 .925-.15 1.29-.406m-2.58 0L8.25 21m6.54-5.656L18.75 21"/>`,
      }, children);
    };
  },
});
