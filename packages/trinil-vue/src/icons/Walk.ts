import { defineComponent, h } from 'vue';

export const Walk = defineComponent({
  name: 'Walk',
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
          innerHTML: `<path d="m11 14 1.868 3.27a1 1 0 0 1 .132.496V21m-2-7-.958 3.832a1 1 0 0 1-.138.312L8.334 20.5M11 14l1.582-5.674m0 0 1.226 3.608a1 1 0 0 0 .782.664l1.91.319m-3.918-4.59a2.5 2.5 0 1 1 1.837-4.653 2.5 2.5 0 0 1-1.837 4.652Zm0 0L9.679 9.903a1 1 0 0 0-.304.254L7.9 12"/>`,
        },
        children,
      );
    };
  },
});
