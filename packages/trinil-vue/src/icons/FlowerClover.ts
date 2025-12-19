import { defineComponent, h } from 'vue';

export const FlowerClover = defineComponent({
  name: 'FlowerClover',
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
          innerHTML: `<path d="M12 6.523C12 3.346 7.709 2.349 6.307 5.2l-.214.436a1 1 0 0 1-.457.457l-.436.214C2.35 7.708 3.346 12 6.523 12M12 6.523c0-3.177 4.291-4.174 5.692-1.323l.215.436a1 1 0 0 0 .456.457l.437.214C21.65 7.708 20.654 12 17.477 12M12 6.523V8.5M6.523 12C3.346 12 2.35 16.29 5.2 17.692l.437.215a1 1 0 0 1 .456.456l.214.437C7.71 21.65 12 20.654 12 17.477M6.523 12H8.5m8.977 0c3.177 0 4.174 4.291 1.323 5.692l-.437.215a1 1 0 0 0-.456.456l-.215.437C16.293 21.65 12 20.654 12 17.477M17.477 12H15.5M12 17.477V15.5"/>`,
        },
        children,
      );
    };
  },
});
