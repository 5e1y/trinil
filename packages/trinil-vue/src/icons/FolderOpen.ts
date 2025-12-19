import { defineComponent, h } from 'vue';

export const FolderOpen = defineComponent({
  name: 'FolderOpen',
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
          innerHTML: `<path d="m3.128 18.49 1.683-6.732A1 1 0 0 1 5.78 11H19M3.128 18.49A1 1 0 0 0 4 19h14.22a1 1 0 0 0 .97-.758l1.5-6A1 1 0 0 0 19.72 11H19M3.128 18.49A1 1 0 0 1 3 18V6a1 1 0 0 1 1-1h4.654c.813 0 1.544.495 1.846 1.25a1.99 1.99 0 0 0 1.846 1.25H18a1 1 0 0 1 1 1V11"/>`,
        },
        children,
      );
    };
  },
});
