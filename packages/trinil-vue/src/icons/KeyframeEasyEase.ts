import { defineComponent, h } from 'vue';

export const KeyframeEasyEase = defineComponent({
  name: 'KeyframeEasyEase',
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
        innerHTML: `<path d="M12 4h8.084c.89 0 1.337 1.077.707 1.707l-5.586 5.586a1 1 0 0 0 0 1.414l5.586 5.586c.63.63.184 1.707-.707 1.707H12m0-16h-.002M12 4v16m-.002-16v16m0-16H3.914c-.89 0-1.337 1.077-.707 1.707l5.586 5.586a1 1 0 0 1 0 1.414l-5.586 5.586c-.63.63-.184 1.707.707 1.707h8.084m0 0H12"/>`,
      }, children);
    };
  },
});
