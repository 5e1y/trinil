import { defineComponent, h } from 'vue';

export const Album = defineComponent({
  name: 'Album',
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
          innerHTML: `<path d="M17 5.674a7 7 0 0 1 0 12.652m0-12.652v12.652m0-12.652A.674.674 0 0 0 16.326 5H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12.326a.674.674 0 0 0 .674-.674M10 12.5V8.1a.1.1 0 0 1 .1-.1c1.423.022 1.945.489 3.9 0m-4 4.5v1.75a1.75 1.75 0 1 1-1.75-1.75z"/>`,
        },
        children,
      );
    };
  },
});
