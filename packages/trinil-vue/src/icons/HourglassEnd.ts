import { defineComponent, h } from 'vue';

export const HourglassEnd = defineComponent({
  name: 'HourglassEnd',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M5 5.324V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1.324a5 5 0 0 1-2.227 4.16l-1.277.852a2 2 0 0 0 0 3.328l1.277.852A5 5 0 0 1 19 18.676V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1.324a5 5 0 0 1 2.226-4.16l1.278-.852a2 2 0 0 0 0-3.328l-1.277-.852A5 5 0 0 1 5 5.324Z"/>`,
        },
        children,
      );
    };
  },
});
