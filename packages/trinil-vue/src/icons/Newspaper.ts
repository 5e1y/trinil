import { defineComponent, h } from 'vue';

export const Newspaper = defineComponent({
  name: 'Newspaper',
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
          innerHTML: `<path d="M19.75 19H4.5A1.5 1.5 0 0 1 3 17.5V6a1 1 0 0 1 1-1h13.5a1 1 0 0 1 1 1v1m1.25 12c-.69 0-1.25-.56-1.25-1.25V7m1.25 12c.69 0 1.25-.56 1.25-1.25V8a1 1 0 0 0-1-1h-1.5m-5.5.5h2.5M13 10h3m-3 2.5h1.5m-9-4.9v4.8a.1.1 0 0 0 .1.1h4.8a.1.1 0 0 0 .1-.1V7.6a.1.1 0 0 0-.1-.1H5.6a.1.1 0 0 0-.1.1Z"/>`,
        },
        children,
      );
    };
  },
});
