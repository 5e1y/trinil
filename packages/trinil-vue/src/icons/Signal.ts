import { defineComponent, h } from 'vue';

export const Signal = defineComponent({
  name: 'Signal',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M9.172 9.172a4 4 0 0 0 0 5.656m5.656-5.656a4 4 0 0 1 0 5.656M7.404 7.404a6.5 6.5 0 0 0 0 9.192m9.192-9.192a6.5 6.5 0 0 1 0 9.192m1.768-10.96a9 9 0 0 1 0 12.728M5.636 5.636a9 9 0 0 0 0 12.728m7.425-7.425a1.5 1.5 0 1 0-2.122 2.122 1.5 1.5 0 0 0 2.122-2.122Z"/>`,
        },
        children,
      );
    };
  },
});
