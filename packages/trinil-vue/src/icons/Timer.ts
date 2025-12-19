import { defineComponent, h } from 'vue';

export const Timer = defineComponent({
  name: 'Timer',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M18 19h1.5a.5.5 0 0 0 .5-.5l-.55-8.515a7.466 7.466 0 0 0-14.9 0L4 18.5a.5.5 0 0 0 .5.5H6m12 0v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-1m12 0H6m6-3.5a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm-.5-3L14 10a1.06 1.06 0 0 0-1.5-1.5L10 11a1.06 1.06 0 0 0 1.5 1.5Z"/>`,
        },
        children,
      );
    };
  },
});
