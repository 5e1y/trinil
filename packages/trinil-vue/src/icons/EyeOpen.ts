import { defineComponent, h } from 'vue';

export const EyeOpen = defineComponent({
  name: 'EyeOpen',
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
          innerHTML: `<path d="M20.637 12.531c-4.252 5.843-13.022 5.843-17.274 0a.9.9 0 0 1 0-1.062c4.252-5.843 13.022-5.843 17.274 0 .23.317.23.745 0 1.062ZM8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z" clip-rule="evenodd"/>`,
        },
        children,
      );
    };
  },
});
