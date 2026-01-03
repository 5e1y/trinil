import { defineComponent, h } from 'vue';

export const KeyframeEaseOut = defineComponent({
  name: 'KeyframeEaseOut',
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
        innerHTML: `<path d="M11.997 3.75h8.379c1.336 0 2.005 1.616 1.06 2.56l-4.628 4.63a1.5 1.5 0 0 0 0 2.12l4.628 4.63c.945.944.276 2.56-1.06 2.56h-8.379m0-16.5h-1.629a1.5 1.5 0 0 0-1.06.44l-6.75 6.75a1.5 1.5 0 0 0 0 2.12l6.75 6.75a1.5 1.5 0 0 0 1.06.44h1.629m0-16.5v16.5"/>`,
      }, children);
    };
  },
});
