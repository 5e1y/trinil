import { defineComponent, h } from 'vue';

export const Crutch = defineComponent({
  name: 'Crutch',
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
          innerHTML: `<path d="M19.5 15.367a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0 0v-1a1 1 0 0 0-1-1H17m-12.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm0 0v-1a1 1 0 0 1 1-1H7M7 9H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2h.587c.575 0 1.116.27 1.46.73L7.25 6a2.5 2.5 0 0 0 2 1H20a1 1 0 0 1 0 2h-3M7 9l5 2.184M7 9h10m0 4.367-5-2.183m5 2.183H7m5-2.183L17 9m-5 2.184-5 2.183"/>`,
        },
        children,
      );
    };
  },
});
