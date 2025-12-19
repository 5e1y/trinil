import { defineComponent, h } from 'vue';

export const TextBolt = defineComponent({
  name: 'TextBolt',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M13.5 20H7.1a.1.1 0 0 1-.1-.1V4.6a.1.1 0 0 1 .1-.1H13a4 4 0 0 1 1.866 7.54c-.083.043-.074.172.013.204A4.002 4.002 0 0 1 13.5 20Z"/>`,
        },
        children,
      );
    };
  },
});
