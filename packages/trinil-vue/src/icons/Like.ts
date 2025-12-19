import { defineComponent, h } from 'vue';

export const Like = defineComponent({
  name: 'Like',
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
          innerHTML: `<path d="M7.5 19.5h9.882a1 1 0 0 0 .894-.553l1.382-2.764a12.7 12.7 0 0 0 1.303-4.684c.043-.55-.409-1-.96-1h-4.147a1 1 0 0 1-.956-1.293l.867-2.817a1.85 1.85 0 0 0-1.354-2.344c-.259-.058-.516.06-.704.248L7.5 10.5m0 9H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h3.5m0 9v-9"/>`,
        },
        children,
      );
    };
  },
});
