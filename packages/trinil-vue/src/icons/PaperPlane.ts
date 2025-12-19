import { defineComponent, h } from 'vue';

export const PaperPlane = defineComponent({
  name: 'PaperPlane',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M8.5 12.5 5.249 9.249a1 1 0 0 1 .464-1.678l14.125-3.53a.1.1 0 0 1 .085.016M8.5 12.5l-.596 2.383a1 1 0 0 0 1.213 1.213L11.5 15.5m-3-3 11.423-8.443M11.5 15.5l3.251 3.25a1 1 0 0 0 1.677-.464L19.96 4.161a.1.1 0 0 0-.017-.084M11.5 15.5l8.443-11.423m0 0-.02-.02"/>`,
        },
        children,
      );
    };
  },
});
