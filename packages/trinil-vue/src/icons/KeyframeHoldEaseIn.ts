import { defineComponent, h } from 'vue';

export const KeyframeHoldEaseIn = defineComponent({
  name: 'KeyframeHoldEaseIn',
  props: {
    size: { type: Number, default: 24 },
    color: { type: String, default: 'currentColor' },
    class: { type: String, default: undefined },
    title: { type: String, default: undefined },
    ariaLabel: { type: String, default: undefined },
  },
  setup(props) {
    return () => {
      const children = [];
      if (props.title) {
        children.push(h('title', {}, props.title));
      }
      return h(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: props.color,
          'stroke-width': 1.5,
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'vector-effect': 'non-scaling-stroke',
          width: props.size,
          height: props.size,
          class: props.class,
          role: 'img',
          'aria-label': props.ariaLabel,
          innerHTML: `<path d="M12.088 4H4.002c-.89 0-1.337 1.077-.707 1.707l5.586 5.586a1 1 0 0 1 0 1.414l-5.586 5.586c-.63.63-.184 1.707.707 1.707h8.086m0-16v16m0-16h6.998a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-6.998"/>`,
        },
        children,
      );
    };
  },
});
