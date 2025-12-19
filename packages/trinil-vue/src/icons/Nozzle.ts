import { defineComponent, h } from 'vue';

export const Nozzle = defineComponent({
  name: 'Nozzle',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M8 11H5.1a.1.1 0 0 0-.1.1v5.852a.1.1 0 0 0 .038.078l4.935 3.948a.1.1 0 0 0 .062.022h3.93a.1.1 0 0 0 .062-.022l4.935-3.948a.1.1 0 0 0 .038-.078V11.1a.1.1 0 0 0-.1-.1H16m-8 0V3.1a.1.1 0 0 1 .1-.1h7.8a.1.1 0 0 1 .1.1V11m-8 0h8m-9 0 10-2M7 8.5l10-2M7 6l10-2"/>`,
        },
        children,
      );
    };
  },
});
