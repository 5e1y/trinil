import { defineComponent, h } from 'vue';

export const Plug = defineComponent({
  name: 'Plug',
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
          innerHTML: `<path d="M7.5 9H6a1 1 0 0 0-1 1v2a7 7 0 0 0 4.725 6.622c.444.153.775.552.775 1.022V21.5M7.5 9V4.25a1.25 1.25 0 0 1 2.5 0V9M7.5 9H10m0 0h4m2.5 0H18a1 1 0 0 1 1 1v2a7 7 0 0 1-4.725 6.622c-.444.153-.775.552-.775 1.022V21.5m3-12.5V4.25a1.25 1.25 0 1 0-2.5 0V9m2.5 0H14"/>`,
        },
        children,
      );
    };
  },
});
