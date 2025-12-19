import { defineComponent, h } from 'vue';

export const Lamp1 = defineComponent({
  name: 'Lamp1',
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
          innerHTML: `<path d="M12 19v1.5m0-18v5m0 0s-3 0-5 2c-1.4 1.4-1.33 3.292-1.162 4.3.071.424.452.7.883.7h10.558c.43 0 .812-.276.883-.7.168-1.008.239-2.9-1.162-4.3-2-2-5-2-5-2Zm-2 7c0 2 1 2.5 2 2.5s2-.5 2-2.5m1.5 3 1 1m-8-1-1 1"/>`,
        },
        children,
      );
    };
  },
});
