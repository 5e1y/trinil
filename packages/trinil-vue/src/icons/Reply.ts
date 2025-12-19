import { defineComponent, h } from 'vue';

export const Reply = defineComponent({
  name: 'Reply',
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
          innerHTML: `<path d="M16 13a3 3 0 0 0-3-3H8m0 0 2.5-2.5M8 10l2.5 2.5M9 4.5h6a6 6 0 0 1 2.651 11.384c-.38.188-.652.559-.588.978.09.59.307 1.432.837 2.031.062.07.1.16.1.253a.34.34 0 0 1-.354.346c-2.565-.118-3.805-1.506-4.325-2.35-.226-.366-.611-.642-1.042-.642H9a6 6 0 0 1 0-12Z"/>`,
        },
        children,
      );
    };
  },
});
