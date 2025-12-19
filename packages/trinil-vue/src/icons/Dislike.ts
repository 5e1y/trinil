import { defineComponent, h } from 'vue';

export const Dislike = defineComponent({
  name: 'Dislike',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M16.463 4.5H6.581a1 1 0 0 0-.894.553L4.305 7.817A12.7 12.7 0 0 0 3.003 12.5c-.044.55.408 1 .96 1H8.11a1 1 0 0 1 .956 1.293L8.2 17.611a1.85 1.85 0 0 0 1.353 2.344c.26.058.517-.06.704-.248l6.207-6.207m0-9h3.5a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-3.5m0-9v9"/>`,
        },
        children,
      );
    };
  },
});
