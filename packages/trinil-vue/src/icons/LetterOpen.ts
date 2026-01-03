import { defineComponent, h } from 'vue';

export const LetterOpen = defineComponent({
  name: 'LetterOpen',
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
        innerHTML: `<path d="M21.75 8.25v10.5a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5V8.25m19.5 0-1.5.808m1.5-.808-1.5-.75m-18 .75 1.5.808m-1.5-.808 1.5-.75m16.5 1.558V7.5m0 1.558L12 13.5 3.75 9.058m0 0V7.5m0 0V3.75h16.5V7.5"/>`,
      }, children);
    };
  },
});
