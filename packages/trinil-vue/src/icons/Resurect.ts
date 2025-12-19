import { defineComponent, h } from 'vue';

export const Resurect = defineComponent({
  name: 'Resurect',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M7 12.25h1.996a.525.525 0 0 0 .496-.334l1.414-3.806A.17.17 0 0 1 11.07 8c.082 0 .153.054.17.13l1.783 7.742a.17.17 0 0 0 .167.128.17.17 0 0 0 .163-.114l1.163-3.535a.52.52 0 0 1 .502-.351H17m4 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>`,
        },
        children,
      );
    };
  },
});
