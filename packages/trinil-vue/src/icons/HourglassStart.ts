import { defineComponent, h } from 'vue';

export const HourglassStart = defineComponent({
  name: 'HourglassStart',
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
          innerHTML: `<path d="M7.225 6h9.184c.201 0 .364.163.364.365a.21.21 0 0 1-.123.19L15 7.11a3.04 3.04 0 0 0-1.383 1.218c-.509.849-2.295.993-2.995.293l-.402-.402a4 4 0 0 0-.47-.4c-.739-.538-1.638-.81-2.452-1.227q-.034-.016-.07-.03A.36.36 0 0 1 7 6.225C7 6.101 7.1 6 7.225 6Z"/>`,
        },
        children,
      );
    };
  },
});
