import { defineComponent, h } from 'vue';

export const Paired = defineComponent({
  name: 'Paired',
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
          innerHTML: `<path d="M5 10.59a4.612 4.612 0 0 0-1.966 3.752A4.625 4.625 0 0 0 7.659 19h4.591A4.75 4.75 0 0 0 17 14.25v-.042a4.434 4.434 0 0 0-4.434-4.458H9m10 3.683q.286-.196.537-.433a4.625 4.625 0 0 0-3.162-8H11.75A4.75 4.75 0 0 0 7 9.797a4.5 4.5 0 0 0 4.5 4.453H15"/>`,
        },
        children,
      );
    };
  },
});
