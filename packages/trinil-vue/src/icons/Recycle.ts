import { defineComponent, h } from 'vue';

export const Recycle = defineComponent({
  name: 'Recycle',
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
          innerHTML: `<path d="M7 18H4.766a1 1 0 0 1-.857-1.514l4.716-7.86m0 0-3.978.994m3.978-.995.994 3.978m8.006-.228.994-3.977m-.994 3.977-3.977-.994m3.977.994L12.857 4.43a1 1 0 0 0-1.715 0L10.2 6l-.2.333M9.75 18h9.484a1 1 0 0 0 .857-1.514l-.966-1.61M9.75 18l2.983 2.983M9.75 18l2.983-2.983"/>`,
        },
        children,
      );
    };
  },
});
