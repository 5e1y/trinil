import { defineComponent, h } from 'vue';

export const WalletCard = defineComponent({
  name: 'WalletCard',
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
          innerHTML: `<path d="M18.5 13.5h-4.36a.19.19 0 0 0-.184.133A2 2 0 0 1 12.059 15h-.117a2 2 0 0 1-1.898-1.367.19.19 0 0 0-.184-.133h-.893m0 0 8.48-2.272a2 2 0 0 0 1.414-2.45L18.384 7m-9.417 6.5h-1.43m-2.037 0h2.038m0 0a2 2 0 0 1-1.234-1.357L5.139 7.796A2 2 0 0 1 5.09 7m0 0a2 2 0 0 1 1.463-1.653l8.694-2.33a2 2 0 0 1 2.45 1.415L18.383 7M5.09 7H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-.616"/>`,
        },
        children,
      );
    };
  },
});
