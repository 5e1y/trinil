import { defineComponent, h } from 'vue';

export const TimerPlus = defineComponent({
  name: 'TimerPlus',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M6 19H4.5a.5.5 0 0 1-.5-.5l.55-8.515a7.466 7.466 0 0 1 14.9 0l.213 3.298M6 19v1a1 1 0 0 0 1 1h7m-8-2h7.1m4.9-1v-2.5m0 2.5h2.5M18 18h-2.5m2.5 0v2.5m-1.91-7.122A5 5 0 0 1 18 13c.583 0 1.143.1 1.663.283m-3.574.095a5 5 0 1 0-2.178 1.744m2.178-1.744a5 5 0 0 0-2.178 1.744m0 0A5.022 5.022 0 0 0 13.1 19m-.001 0c.15.739.463 1.419.9 2m0 0a5 5 0 1 0 5.663-7.717M11.5 12.5 14 10a1.06 1.06 0 0 0-1.5-1.5L10 11a1.06 1.06 0 0 0 1.5 1.5Z"/>`,
        },
        children,
      );
    };
  },
});
