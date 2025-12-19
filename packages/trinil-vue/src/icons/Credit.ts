import { defineComponent, h } from 'vue';

export const Credit = defineComponent({
  name: 'Credit',
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
          innerHTML: `<path d="M20 11A8 8 0 0 0 5.577 6.23m0 0L5.5 2m.077 4.23H10M4 13a8 8 0 0 0 14.423 4.77m0 0L18.5 22m-.077-4.23H14M9.5 11v2m0-2h-1m1 0H12m-2.5 0a2.5 2.5 0 0 1 4.95-.5M9.5 13h-1m1 0H12m-2.5 0a2.5 2.5 0 0 0 4.95.5"/>`,
        },
        children,
      );
    };
  },
});
