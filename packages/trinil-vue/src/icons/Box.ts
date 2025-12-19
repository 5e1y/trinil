import { defineComponent, h } from 'vue';

export const Box = defineComponent({
  name: 'Box',
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
          innerHTML: `<path d="M12 12.5v8.856m0-8.856 8.86-4.922M12 12.5 3.14 7.578M12 21.356a1 1 0 0 1-.486-.126l-8-4.444A1 1 0 0 1 3 15.912V8.088a1 1 0 0 1 .14-.51M12 21.356a1 1 0 0 0 .486-.126l8-4.444a1 1 0 0 0 .514-.874V8.088a1 1 0 0 0-.14-.51m0 0a1 1 0 0 0-.374-.364l-8-4.444a1 1 0 0 0-.972 0l-8 4.444a1 1 0 0 0-.374.364"/>`,
        },
        children,
      );
    };
  },
});
