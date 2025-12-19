import { defineComponent, h } from 'vue';

export const TestTube = defineComponent({
  name: 'TestTube',
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
          innerHTML: `<path d="M14.5 18a3 3 0 1 1-6 0V5.303a1 1 0 0 0-.168-.555l-.768-1.151A.384.384 0 0 1 7.884 3h7.232a.384.384 0 0 1 .32.597l-.768 1.151a1 1 0 0 0-.168.555V9m0 9h-2m2 0v-3m0 0h-2m2 0v-3m0 0h-2m2 0V9m0 0h-2"/>`,
        },
        children,
      );
    };
  },
});
