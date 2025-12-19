import { defineComponent, h } from 'vue';

export const Torus = defineComponent({
  name: 'Torus',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M15 12.054c-.597.509-1.536.946-3 .946s-2.403-.437-3-.946m6 0c.83-.708 1-1.554 1-1.554m-1 1.554s-.229-1.554-3-1.554-3 1.554-3 1.554M8 10.5s.17.846 1 1.554M21 12c0 3.866-4.03 7-9 7s-9-3.134-9-7 4.03-7 9-7 9 3.134 9 7Z"/>`,
        },
        children,
      );
    };
  },
});
