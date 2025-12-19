import { defineComponent, h } from 'vue';

export const Lamp = defineComponent({
  name: 'Lamp',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M12.072 11h6.509a.42.42 0 0 0 .389-.575l-2.719-6.796A1 1 0 0 0 15.323 3H8.677a1 1 0 0 0-.928.629L5.03 10.425a.42.42 0 0 0 .39.575h3.116m3.536 0v10m0-10H8.536m3.536 10H17m-4.928 0H7m1.536-10v5"/>`,
        },
        children,
      );
    };
  },
});
