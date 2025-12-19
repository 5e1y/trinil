import { defineComponent, h } from 'vue';

export const FruitCherry = defineComponent({
  name: 'FruitCherry',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M7.5 15c3.5-3 4-5 5.031-11.407M7.501 15a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm5.03-11.407C12.502 10 15.002 11.5 17.5 13m-4.969-9.407c-.61 3.087-4.87 5.57-7.872 4.62a.096.096 0 0 1-.065-.113c.678-3.076 4.959-5.522 7.937-4.507ZM17.5 13a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"/>`,
        },
        children,
      );
    };
  },
});
