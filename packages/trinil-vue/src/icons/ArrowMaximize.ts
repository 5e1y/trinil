import { defineComponent, h } from 'vue';

export const ArrowMaximize = defineComponent({
  name: 'ArrowMaximize',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M20 4h-5.5M20 4v5.5M20 4l-5 5m5 11v-5.5m0 5.5h-5.5m5.5 0-5-5M4 20h5.5M4 20v-5.5M4 20l5-5M4 4v5.5M4 4h5.5M4 4l5 5"/>`,
        },
        children,
      );
    };
  },
});
