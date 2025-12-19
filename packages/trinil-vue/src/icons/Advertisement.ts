import { defineComponent, h } from 'vue';

export const Advertisement = defineComponent({
  name: 'Advertisement',
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
          innerHTML: `<path d="M10.88 13.5 9.765 9.464a1.313 1.313 0 0 0-2.532 0L6.121 13.5m4.758 0H6.121m4.758 0 .483 1.75M6.121 13.5l-.483 1.75M14 9.75v4.5a1 1 0 0 0 1 1h.25a3.25 3.25 0 0 0 0-6.5H15a1 1 0 0 0-1 1ZM21 6v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1Z"/>`,
        },
        children,
      );
    };
  },
});
