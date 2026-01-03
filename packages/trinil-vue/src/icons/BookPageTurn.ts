import { defineComponent, h } from 'vue';

export const BookPageTurn = defineComponent({
  name: 'BookPageTurn',
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
        innerHTML: `<path d="m12 21 .554-.317A8.75 8.75 0 0 1 21.75 21V7.5a8.74 8.74 0 0 0-4.5-1.462M12 21l-.554-.317A8.75 8.75 0 0 0 2.25 21V7.5a8.75 8.75 0 0 1 9.196-.316L12 7.5M12 21V7.5M12 21l5.25-4.5V6.038M12 7.5 17.25 3v3.038"/>`,
      }, children);
    };
  },
});
