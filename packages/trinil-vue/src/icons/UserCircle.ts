import { defineComponent, h } from 'vue';

export const UserCircle = defineComponent({
  name: 'UserCircle',
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
          innerHTML: `<path d="M12 15a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm0 0h2a5 5 0 0 1 4.624 3.093M12 15h-2a5 5 0 0 0-4.624 3.093m13.248 0a9 9 0 1 0-13.247 0m13.247 0A8.98 8.98 0 0 1 12 21a8.98 8.98 0 0 1-6.624-2.907"/>`,
        },
        children,
      );
    };
  },
});
