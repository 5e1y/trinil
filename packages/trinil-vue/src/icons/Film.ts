import { defineComponent, h } from 'vue';

export const Film = defineComponent({
  name: 'Film',
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
          innerHTML: `<path d="M17 7.5v9m0-9h-1.5m1.5 0h1m-1 9h1m-1 0h-1.5m2.5 0h2.5m-2.5 0V19m2.5-2.5h.4a.1.1 0 0 0 .1-.1V7.6a.1.1 0 0 0-.1-.1h-.4m0 9V19m-5-2.5H13m2.5 0V19M13 16.5h-2.5m2.5 0V19m-2.5-2.5H8m2.5 0V19M8 16.5H7m1 0V19m-1-2.5v-9m0 9H5.5m1.5-9H5.5m1.5 0h1m-5 0V5.1a.1.1 0 0 1 .1-.1h2.4M3 7.5v9m0-9h2.5m-2.5 9h2.5m-2.5 0v2.4a.1.1 0 0 0 .1.1h2.4m0-2.5V19m0-11.5V5m0 0H8m0 2.5V5m0 2.5h2.5M8 5h2.5m0 2.5V5m0 2.5H13M10.5 5H13m0 2.5V5m0 2.5h2.5M13 5h2.5m0 2.5V5m0 0H18m0 2.5V5m0 2.5h2.5M18 5h2.5m0 2.5V5m0 0h.5M5.5 19H8m0 0h2.5m0 0H13m0 0h2.5m0 0H18m0 0h2.5m.5 0h-.5"/>`,
        },
        children,
      );
    };
  },
});
