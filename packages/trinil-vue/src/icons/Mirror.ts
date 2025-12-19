import { defineComponent, h } from 'vue';

export const Mirror = defineComponent({
  name: 'Mirror',
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
          innerHTML: `<path d="M12 13.5V13m0 8v-.5m0-2V18m0-2v-.5m0-4.5v-.5m0-2V8m0-2v-.5m0-2V3m8.8 13h-5.7a.1.1 0 0 1-.1-.1V8.3a.1.1 0 0 1 .18-.06l5.7 7.6a.1.1 0 0 1-.08.16ZM3.2 16h5.7a.1.1 0 0 0 .1-.1V8.3a.1.1 0 0 0-.18-.06l-5.7 7.6a.1.1 0 0 0 .08.16Z"/>`,
        },
        children,
      );
    };
  },
});
