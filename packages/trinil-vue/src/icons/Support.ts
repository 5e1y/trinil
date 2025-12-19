import { defineComponent, h } from 'vue';

export const Support = defineComponent({
  name: 'Support',
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
          innerHTML: `<path d="M7 20h3m10 0h-2m0 0V9m0 11h-4m0 0v-7m0 7h-4m0 0v-3m-4.293 1.293L18.293 5.707c.63-.63.184-1.707-.707-1.707H5a1 1 0 0 0-1 1v12.586c0 .89 1.077 1.337 1.707.707Z"/>`,
        },
        children,
      );
    };
  },
});
