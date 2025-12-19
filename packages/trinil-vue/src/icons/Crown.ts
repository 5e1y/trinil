import { defineComponent, h } from 'vue';

export const Crown = defineComponent({
  name: 'Crown',
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
          innerHTML: `<path d="M3 17v-6.958a.1.1 0 0 1 .03-.071l2.9-2.9a.1.1 0 0 1 .14 0L8.93 9.93a.1.1 0 0 0 .14 0l2.86-2.86a.1.1 0 0 1 .14 0l2.86 2.86a.1.1 0 0 0 .14 0l2.86-2.86a.1.1 0 0 1 .14 0l2.9 2.9a.1.1 0 0 1 .03.072V17a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z"/>`,
        },
        children,
      );
    };
  },
});
