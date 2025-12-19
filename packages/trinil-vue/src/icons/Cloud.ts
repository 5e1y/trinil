import { defineComponent, h } from 'vue';

export const Cloud = defineComponent({
  name: 'Cloud',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M15.984 10.401C18.41 10.023 21 11.789 21 14.68A4.32 4.32 0 0 1 16.68 19H7.32A4.32 4.32 0 0 1 3 14.68c0-2.094 1.36-3.598 3.03-4.124m9.954-.155Q16 10.203 16 10a5 5 0 1 0-9.97.556m9.954-.155a4.17 4.17 0 0 0-1.984.882m-7.97-.727A4.4 4.4 0 0 1 8 10.399a4.17 4.17 0 0 1 2 .884"/>`,
        },
        children,
      );
    };
  },
});
