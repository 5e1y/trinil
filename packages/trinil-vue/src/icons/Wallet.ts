import { defineComponent, h } from 'vue';

export const Wallet = defineComponent({
  name: 'Wallet',
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
          innerHTML: `<path d="M3 17V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm2.5-7v.5a1 1 0 0 0 1 1h3.36c.084 0 .158.053.184.133A2 2 0 0 0 11.941 13h.117a2 2 0 0 0 1.898-1.367c.026-.08.1-.133.184-.133h3.36a1 1 0 0 0 1-1V10a2 2 0 0 0-2-2h-9a2 2 0 0 0-2 2Z" clip-rule="evenodd"/>`,
        },
        children,
      );
    };
  },
});
