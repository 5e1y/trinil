import { defineComponent, h } from 'vue';

export const Outside = defineComponent({
  name: 'Outside',
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
          innerHTML: `<path d="M6 20.5v-2m0 0s3-.086 3-4c0-3.521-2.428-8.396-2.915-9.339a.095.095 0 0 0-.17 0C5.425 6.094 3 10.904 3 14.5c0 4 3 4 3 4Zm0 0V14m6.5 1H14m5 0h-1.5M14 15l-2 5.5m2-5.5h3.5m0 0 2 5.5m-9-2.5H21m-2.5-8.5V11m-4-5.5H13m2.5 3-1 1m2-4a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"/>`,
        },
        children,
      );
    };
  },
});
