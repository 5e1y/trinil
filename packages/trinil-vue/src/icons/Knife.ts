import { defineComponent, h } from 'vue';

export const Knife = defineComponent({
  name: 'Knife',
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
          innerHTML: `<path d="m12 11 8.982-3.992M12 11v9.99M12 11l-2.246-.998m11.228-2.994a.1.1 0 0 0-.041-.035l-6.117-2.718m6.158 2.753a.1.1 0 0 1 .018.057v9.87a.1.1 0 0 1-.06.091l-8.9 3.956a.1.1 0 0 1-.04.008M3.018 7.008a.1.1 0 0 1 .041-.035l8.9-3.955a.1.1 0 0 1 .082 0l2.783 1.237M3.018 7.008A.1.1 0 0 0 3 7.065v9.87a.1.1 0 0 0 .06.091L10 20.111M3.018 7.008l6.736 2.994M12 20.99a.1.1 0 0 1-.04-.008L10 20.11m-.246-10.11L5.09 12.945a.1.1 0 0 0-.029.142L10 20.111m-.246-10.11 5.07-5.746"/>`,
        },
        children,
      );
    };
  },
});
