import { defineComponent, h } from 'vue';

export const Chat = defineComponent({
  name: 'Chat',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M16.924 13.221c.674.405 1.563.718 2.723.771a.34.34 0 0 0 .353-.346.4.4 0 0 0-.1-.253c-.9-1.018-.9-2.734-.9-2.734 0-.12.064-.23.165-.295A4 4 0 0 0 17 3h-6a4 4 0 0 0-2.646 7m8.57 3.221Q17 13.6 17 14a4 4 0 0 1-4 4H9.72c-.43 0-.815.276-1.04.643-.521.843-1.761 2.231-4.326 2.349A.34.34 0 0 1 4 20.646c0-.093.038-.183.1-.253.9-1.018.9-2.734.9-2.734 0-.12-.065-.23-.165-.295A4 4 0 0 1 7 10h1.354m8.57 3.221A4 4 0 0 0 13 10H8.354"/>`,
        },
        children,
      );
    };
  },
});
