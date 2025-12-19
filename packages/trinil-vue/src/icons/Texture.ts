import { defineComponent, h } from 'vue';

export const Texture = defineComponent({
  name: 'Texture',
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
          innerHTML: `<path d="M7.5 11.5v-4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v6.297m-9-2.297v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-2.703m-9-2.297h.217c1.233 0 2.416.52 3.288 1.444 1.458 1.547 3.695 1.884 5.495.853m4.193.532A9 9 0 1 1 3.307 9.67a9 9 0 0 1 17.386 4.66ZM13 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>`,
        },
        children,
      );
    };
  },
});
