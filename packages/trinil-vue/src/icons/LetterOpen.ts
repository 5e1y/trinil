import { defineComponent, h } from 'vue';

export const LetterOpen = defineComponent({
  name: 'LetterOpen',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="m5 10.222 6.479 3.96a1 1 0 0 0 1.043 0L19 10.221m-14 0V8m0 2.222-1.85-1.13M19 10.222V8m0 2.222 1.85-1.13M19 8V6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v2m14 0 1.447.724c.17.084.307.213.403.368M5 8l-1.447.724a1 1 0 0 0-.403.368m17.7 0c.096.155.15.336.15.526V18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.618a1 1 0 0 1 .15-.526"/>`,
        },
        children,
      );
    };
  },
});
