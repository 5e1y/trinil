import { defineComponent, h } from 'vue';

export const Navigation = defineComponent({
  name: 'Navigation',
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
          innerHTML: `<path d="m5.493 17.515 5.613-11.226a1 1 0 0 1 1.788 0l5.613 11.226c.386.77-.32 1.635-1.152 1.413l-5.097-1.36a1 1 0 0 0-.516 0l-5.097 1.36c-.833.222-1.538-.643-1.152-1.413Z"/>`,
        },
        children,
      );
    };
  },
});
