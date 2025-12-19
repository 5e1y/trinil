import { defineComponent, h } from 'vue';

export const Warning = defineComponent({
  name: 'Warning',
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
          innerHTML: `<path d="M11.986 9v5.396m0 2.604v.5M10.922 4.203 3.21 18.755c-.432.816.155 1.8 1.074 1.8h15.564c.922 0 1.508-.992 1.069-1.808L13.065 4.195a1.213 1.213 0 0 0-2.143.008Z"/>`,
        },
        children,
      );
    };
  },
});
