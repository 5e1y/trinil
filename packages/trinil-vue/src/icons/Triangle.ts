import { defineComponent, h } from 'vue';

export const Triangle = defineComponent({
  name: 'Triangle',
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
          innerHTML: `<path d="m3.21 18.755 7.712-14.552a1.213 1.213 0 0 1 2.143-.008l7.85 14.552c.44.816-.146 1.808-1.068 1.808H4.283c-.919 0-1.506-.985-1.074-1.8Z"/>`,
        },
        children,
      );
    };
  },
});
