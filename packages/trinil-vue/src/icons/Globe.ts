import { defineComponent, h } from 'vue';

export const Globe = defineComponent({
  name: 'Globe',
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
          innerHTML: `<path d="M12 21C7.229 15.948 7.229 8.052 12 3m0 18a9 9 0 0 1-9-9m9 9a9 9 0 0 0 9-9m-9 9c4.77-5.052 4.77-12.948 0-18m0 0a9 9 0 0 0-9 9m9-9a9 9 0 0 1 9 9M3 12h18"/>`,
        },
        children,
      );
    };
  },
});
