import { defineComponent, h } from 'vue';

export const Users = defineComponent({
  name: 'Users',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M10 14a5 5 0 1 1 2-9.584M10 14h2m-2 0H8a5 5 0 0 0-5 5 1 1 0 0 0 1 1h13m-7-6a5.001 5.001 0 0 0 2-9.584M12 14a5 5 0 0 1 5 5v1m-5-6h2m3 6h3a1 1 0 0 0 1-1 5 5 0 0 0-5-5h-2m0 0a5 5 0 1 0-2-9.584"/>`,
        },
        children,
      );
    };
  },
});
