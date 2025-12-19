import { defineComponent, h } from 'vue';

export const ProceduralNode = defineComponent({
  name: 'ProceduralNode',
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
          innerHTML: `<path d="M8.789 13.321a1.5 1.5 0 1 0-.292-2.436m.292 2.436a1.5 1.5 0 0 1-.292-2.436m.292 2.436L6.71 17.179m1.786-6.294-2.494-2.77m0 0a1.5 1.5 0 0 0 .479-1.349m-.479 1.349a1.5 1.5 0 1 1 .478-1.349m0 0 6.537-1.032m0 0a1.5 1.5 0 0 0 2.243 1.06m-2.243-1.06a1.5 1.5 0 1 1 2.243 1.06m0 0 3.478 5.913m0 0a1.5 1.5 0 1 0 1.52 2.585 1.5 1.5 0 0 0-1.52-2.585ZM6.711 17.179a1.5 1.5 0 1 0-1.423 2.642 1.5 1.5 0 0 0 1.423-2.642Z"/>`,
        },
        children,
      );
    };
  },
});
