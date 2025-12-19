import { defineComponent, h } from 'vue';

export const OrthographicView = defineComponent({
  name: 'OrthographicView',
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
          innerHTML: `<path d="M8 4H4.1a.1.1 0 0 0-.1.1V8m4-4v4m0-4h4M8 20H4.1a.1.1 0 0 1-.1-.1V16m4 4v-4m0 4h4M8 8v4m0-4h4M8 8H4m4 4v4m0-4H4m4 0h4m-4 4h4m-4 0H4m8-12v4m0-4h4m-4 16v-4m0 4h4M12 8v4m0-4h4m-4 4v4m0-4h4m-4 4h4m0 4h3.9a.1.1 0 0 0 .1-.1V16m-4 4v-4m0-12h3.9a.1.1 0 0 1 .1.1V8m-4-4v4m0 8v-4m0 4h4m-4-4V8m0 4h4m-4-4h4m0 0v4M4 8v4m0 0v4m16-4v4"/>`,
        },
        children,
      );
    };
  },
});
