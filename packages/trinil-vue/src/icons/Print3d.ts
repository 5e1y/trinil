import { defineComponent, h } from 'vue';

export const Print3d = defineComponent({
  name: 'Print3d',
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
          innerHTML: `<path d="M12 7h1a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1zm0 0v1m0 9v3.917M12 17l5.81-2.42M12 17l-5.804-2.418M11 12.5l-4.371 1.749a1 1 0 0 0-.433.333M12 10c0 .667.6 2.25 3 3.25l2.385.994c.173.072.319.19.424.335M12 20.917a1 1 0 0 1-.385-.077l-5-2.084A1 1 0 0 1 6 17.833v-2.656a1 1 0 0 1 .196-.595M12 20.917a1 1 0 0 0 .385-.077l5-2.084a1 1 0 0 0 .615-.923v-2.666a1 1 0 0 0-.19-.588"/>`,
        },
        children,
      );
    };
  },
});
