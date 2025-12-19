import { defineComponent, h } from 'vue';

export const Thermos = defineComponent({
  name: 'Thermos',
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
          innerHTML: `<path d="m15.833 5-.194-1.164A1 1 0 0 0 14.653 3H9.347a1 1 0 0 0-.986.836l-.779 4.67A.424.424 0 0 0 8 9m7.833-4H17.5a1.5 1.5 0 0 1 0 3h-1.167m-.5-3 .5 3m0 0 .085.507A.424.424 0 0 1 16 9m0 0H8m8 0v11a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9"/>`,
        },
        children,
      );
    };
  },
});
