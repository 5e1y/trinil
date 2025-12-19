import { defineComponent, h } from 'vue';

export const PersonInfo = defineComponent({
  name: 'PersonInfo',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M9 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 0h1c1.313 0 2.429.844 2.836 2.018.18.522-.284.982-.836.982H6.17c-.552 0-1.016-.46-.835-.982A3 3 0 0 1 8.171 13.5zm6-4h3.5M15 12h3.5M15 14.5h2M3 18V6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z"/>`,
        },
        children,
      );
    };
  },
});
