import { defineComponent, h } from 'vue';

export const FlagGolf = defineComponent({
  name: 'FlagGolf',
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
          innerHTML: `<path d="M12 16.5a3.5 3.5 0 0 1 3.5 3.5 1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1 3.5 3.5 0 0 1 3.5-3.5Zm0 0c0-2.179-.165-4.352-.492-6.5m0 0c-.319-2.1-.793-4.177-1.42-6.213a.182.182 0 0 1 .208-.232l5.508 1.033c.85.16 1.11 1.248.426 1.775z"/>`,
        },
        children,
      );
    };
  },
});
