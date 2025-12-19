import { defineComponent, h } from 'vue';

export const UserCross = defineComponent({
  name: 'UserCross',
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
          innerHTML: `<path d="M12 14a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11Zm0 0H9a5 5 0 0 0-5 5v1a1 1 0 0 0 1 1h9m-2-7h3m0 0a5 5 0 0 0-2 4c0 1.126.372 2.164 1 3m1-7a5 5 0 1 1-1 7m4-3 1.5-1.5M18 18l1.5 1.5M18 18l-1.5 1.5M18 18l-1.5-1.5"/>`,
        },
        children,
      );
    };
  },
});
