import { defineComponent, h } from 'vue';

export const TreePine = defineComponent({
  name: 'TreePine',
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
          innerHTML: `<path d="M12 21v-2.5m0 0c-3.105.444-7.889-2.433-.753-15.057A.87.87 0 0 1 12 3c.31 0 .6.174.753.443 7.136 12.624 2.352 15.5-.753 15.057Z"/>`,
        },
        children,
      );
    };
  },
});
