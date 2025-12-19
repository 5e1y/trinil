import { defineComponent, h } from 'vue';

export const Radio = defineComponent({
  name: 'Radio',
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
          innerHTML: `<path d="M12 12a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm0 0v9.5m2.5-7.669a5 5 0 0 0 2.5-4.33 5 5 0 0 0-2.5-4.332m-5 8.662A5 5 0 0 1 7 9.501a5 5 0 0 1 2.5-4.332m6.258-2.16A7.5 7.5 0 0 1 19.5 9.5a7.5 7.5 0 0 1-3.742 6.492m-7.516 0A7.5 7.5 0 0 1 4.5 9.5a7.5 7.5 0 0 1 3.742-6.492"/>`,
        },
        children,
      );
    };
  },
});
