import { defineComponent, h } from 'vue';

export const Sparkle = defineComponent({
  name: 'Sparkle',
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
        innerHTML: `<path d="m10.124 4.721-.528-1.878c-.027-.097-.165-.097-.192 0l-.528 1.878a6 6 0 0 1-4.155 4.155l-1.878.528c-.097.027-.097.165 0 .192l1.878.528a6 6 0 0 1 4.155 4.155l.528 1.878c.027.097.165.097.192 0l.528-1.878a6 6 0 0 1 4.155-4.155l1.878-.528c.097-.027.097-.165 0-.192l-1.878-.528a6 6 0 0 1-4.155-4.155ZM17.88 14.35l-.284-1.007c-.027-.097-.165-.097-.192 0l-.283 1.008a4 4 0 0 1-2.77 2.77l-1.008.283c-.097.027-.097.165 0 .192l1.008.283a4 4 0 0 1 2.77 2.77l.283 1.008c.027.097.165.097.192 0l.283-1.008a4 4 0 0 1 2.77-2.77l1.008-.283c.097-.027.097-.165 0-.192l-1.008-.283a4 4 0 0 1-2.77-2.77Z"/>`,
      }, children);
    };
  },
});
