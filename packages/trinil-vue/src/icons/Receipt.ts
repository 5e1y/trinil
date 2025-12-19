import { defineComponent, h } from 'vue';

export const Receipt = defineComponent({
  name: 'Receipt',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M8.5 7h4m3 0h-1m-6 3h4m3 0h-1m-6 3h4m3 0h-1M6 3.139V20.86a.1.1 0 0 0 .132.095l1.336-.445a.1.1 0 0 1 .064 0l1.436.478a.1.1 0 0 0 .064 0l1.436-.479a.1.1 0 0 1 .064 0l1.436.48a.1.1 0 0 0 .064 0l1.436-.48a.1.1 0 0 1 .064 0l1.436.48a.1.1 0 0 0 .064 0l1.436-.48a.1.1 0 0 1 .064 0l1.336.446a.1.1 0 0 0 .132-.095V3.14a.1.1 0 0 0-.132-.095l-1.336.445a.1.1 0 0 1-.064 0l-1.436-.478a.1.1 0 0 0-.064 0l-1.436.478a.1.1 0 0 1-.064 0l-1.436-.478a.1.1 0 0 0-.064 0l-1.436.478a.1.1 0 0 1-.064 0l-1.436-.478a.1.1 0 0 0-.064 0l-1.436.478a.1.1 0 0 1-.064 0l-1.336-.445A.1.1 0 0 0 6 3.139Z"/>`,
        },
        children,
      );
    };
  },
});
