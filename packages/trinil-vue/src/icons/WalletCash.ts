import { defineComponent, h } from 'vue';

export const WalletCash = defineComponent({
  name: 'WalletCash',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M12.17 7H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-1.17m-5.66 0a3.001 3.001 0 0 0 5.66 0m-5.66 0a3 3 0 1 1 5.659 0M5.5 13.5h.67m0 0h3.69c.084 0 .158.053.184.133.163.49.504.884.936 1.12M6.17 13.5a3 3 0 1 1 4.81 1.254M18.5 13.5h-4.36a.19.19 0 0 0-.184.133A2 2 0 0 1 12.059 15h-.117c-.345 0-.674-.088-.962-.246"/>`,
        },
        children,
      );
    };
  },
});
