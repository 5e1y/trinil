import { defineComponent, h } from 'vue';

export const Psu = defineComponent({
  name: 'Psu',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M14.795 7.795v9a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1zm0 0 1.12-.32c1.686-.481 2.946 1.548 1.767 2.845a1.74 1.74 0 0 0-.188 2.093l.253.405m0 0 .918 1.469a1.42 1.42 0 0 0 1.735.567 1.28 1.28 0 0 0 .622-1.848l-.066-.109a1.54 1.54 0 0 0-1.864-.65l-.833.312a2.6 2.6 0 0 0-.512.26Zm0 0a2.61 2.61 0 0 0-1.155 2.554l.024.172a2.83 2.83 0 0 0 1.23 1.953m-8.05-8.702-2.364 2.836a.1.1 0 0 0 .077.164h2.573a.1.1 0 0 1 .077.164l-2.364 2.836"/>`,
        },
        children,
      );
    };
  },
});
