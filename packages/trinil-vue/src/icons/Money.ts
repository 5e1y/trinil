import { defineComponent, h } from 'vue';

export const Money = defineComponent({
  name: 'Money',
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
          innerHTML: `<path d="M19.5 14h.5a1 1 0 0 0 1-1V6.5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1V7m7.5 8v-2m-9 2v-2m4.5 3a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm6-6.5H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1Z"/>`,
        },
        children,
      );
    };
  },
});
