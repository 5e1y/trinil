import { defineComponent, h } from 'vue';

export const Sparkle = defineComponent({
  name: 'Sparkle',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M18 21.75A4.56 4.56 0 0 0 14.25 18 4.56 4.56 0 0 0 18 14.25 4.56 4.56 0 0 0 21.75 18 4.56 4.56 0 0 0 18 21.75M10.029 15.577 9.75 17.25l-.279-1.673a6.75 6.75 0 0 0-5.548-5.548L2.25 9.75l1.673-.279A6.75 6.75 0 0 0 9.47 3.923L9.75 2.25l.279 1.673a6.75 6.75 0 0 0 5.548 5.548l1.673.279-1.673.279a6.75 6.75 0 0 0-5.548 5.548"/>`,
      }, children);
    };
  },
});
