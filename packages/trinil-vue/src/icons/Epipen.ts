import { defineComponent, h } from 'vue';

export const Epipen = defineComponent({
  name: 'Epipen',
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
          innerHTML: `<path d="m10 17-2.5 2.5a2.12 2.12 0 0 1-3 0M10 17l-3-3m3 3a.707.707 0 0 0 1 0l1.5-1.5M7 14l-2.5 2.5a2.12 2.12 0 0 0 0 3M7 14a.707.707 0 0 1 0-1l9.293-9.293a1 1 0 0 1 1.414 0l2.586 2.586a1 1 0 0 1 0 1.414L16.5 11.5m-12 8-1 1m9-5-1-1m1 1 2-2m0 0-1-1m1 1 2-2m0 0-1-1"/>`,
        },
        children,
      );
    };
  },
});
