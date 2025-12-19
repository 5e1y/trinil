import { defineComponent, h } from 'vue';

export const ToggleOff = defineComponent({
  name: 'ToggleOff',
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
          innerHTML: `<path d="M9 18h6a6 6 0 0 0 0-12H9a6 6 0 1 0 0 12Zm0-9.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z" clip-rule="evenodd"/>`,
        },
        children,
      );
    };
  },
});
