import { defineComponent, h } from 'vue';

export const Layers = defineComponent({
  name: 'Layers',
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
        innerHTML: `<path d="m15.375 12 5.397 2.398a.385.385 0 0 1 0 .704l-8.366 3.717a1 1 0 0 1-.812 0l-8.366-3.717a.385.385 0 0 1 0-.704L8.625 12m6.75 0-2.969 1.32a1 1 0 0 1-.812 0L8.625 12m6.75 0L20.772 9.6a.385.385 0 0 0 0-.703L12.406 5.18a1 1 0 0 0-.812 0L3.228 8.898a.385.385 0 0 0 0 .703L8.625 12"/>`,
      }, children);
    };
  },
});
