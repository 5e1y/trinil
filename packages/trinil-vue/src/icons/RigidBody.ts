import { defineComponent, h } from 'vue';

export const RigidBody = defineComponent({
  name: 'RigidBody',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M8 19H4a1 1 0 0 1-1-1v-7c0-.225.074-.433.2-.6M8 19l4-9m-4 9h8m-8 0-4.8-8.6M12 10h8c.327 0 .618.157.8.4M12 10H4a1 1 0 0 0-.8.4M12 10l4 9m0 0h4a1 1 0 0 0 1-1v-7a1 1 0 0 0-.2-.6M16 19l4.8-8.6M12 3.5V8m0 0-2-2m2 2 2-2"/>`,
        },
        children,
      );
    };
  },
});
