import { defineComponent, h } from 'vue';

export const Coupon = defineComponent({
  name: 'Coupon',
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
          innerHTML: `<path d="m15.5 8.5-7 7m1-7.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM3.586 15.414l-.293.293a1 1 0 0 0-.293.707V18a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1.586a1 1 0 0 0-.293-.707l-.293-.293a4.83 4.83 0 0 1 0-6.828l.293-.293A1 1 0 0 0 21 7.586V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v1.586a1 1 0 0 0 .293.707l.293.293a4.83 4.83 0 0 1 0 6.828Z"/>`,
        },
        children,
      );
    };
  },
});
