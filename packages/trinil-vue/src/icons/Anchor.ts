import { defineComponent, h } from 'vue';

export const Anchor = defineComponent({
  name: 'Anchor',
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
          innerHTML: `<path d="m12 21 1.215-1.215A2.68 2.68 0 0 1 15.11 19a2.448 2.448 0 0 0 2.414-2.85l-.493-2.956a.1.1 0 0 1 .144-.106L19 14m-7 7-1.215-1.215A2.68 2.68 0 0 0 8.89 19a2.448 2.448 0 0 1-2.415-2.85l.493-2.956a.1.1 0 0 0-.144-.106L5 14m7 7V10m0-3v3m0-3a1.5 1.5 0 0 0 1.5-1.5v-1a1.5 1.5 0 0 0-3 0v1A1.5 1.5 0 0 0 12 7Zm0 3h4m-4 0H8"/>`,
        },
        children,
      );
    };
  },
});
