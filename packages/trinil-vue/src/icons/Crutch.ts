import { defineComponent, h } from 'vue';

export const Crutch = defineComponent({
  name: 'Crutch',
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
        innerHTML: `<path d="M20.25 8.25H3.75m16.5 0a1.5 1.5 0 0 0 0-3H8.844c-.38 0-.745-.151-1.014-.42l-.64-.64a1.5 1.5 0 0 0-1.061-.44H3.75a1.5 1.5 0 0 0-1.5 1.5v1.5a1.5 1.5 0 0 0 1.5 1.5m16.5 0L12 13.357M3.75 8.25 12 13.357m5.587 3.459L12 13.357m5.587 3.459a2.25 2.25 0 1 0 3.827 2.369 2.25 2.25 0 0 0-3.827-2.37M12 13.357l-5.587 3.459m0 0a2.25 2.25 0 1 1-3.827 2.369 2.25 2.25 0 0 1 3.827-2.37"/>`,
      }, children);
    };
  },
});
