import { defineComponent, h } from 'vue';

export const Inset = defineComponent({
  name: 'Inset',
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
          innerHTML: `<path d="m12 11 8.982-3.992M12 11v9.99M12 11 3.018 7.008m17.964 0a.1.1 0 0 0-.041-.035l-8.9-3.955a.1.1 0 0 0-.082 0l-8.9 3.955a.1.1 0 0 0-.041.035m17.964 0a.1.1 0 0 1 .018.057v9.87a.1.1 0 0 1-.06.091l-8.9 3.956a.1.1 0 0 1-.04.008M3.018 7.008A.1.1 0 0 0 3 7.065v9.87a.1.1 0 0 0 .06.091l8.9 3.956a.1.1 0 0 0 .04.008m-.04-15.473L8.715 6.908a.1.1 0 0 0 0 .184l3.247 1.391a.1.1 0 0 0 .078 0L15.285 7.1a.1.1 0 0 0 0-.183L12.04 5.517a.1.1 0 0 0-.08 0Z"/>`,
        },
        children,
      );
    };
  },
});
