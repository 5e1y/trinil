import { defineComponent, h } from 'vue';

export const Material3d = defineComponent({
  name: 'Material3d',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M10.447 17.795a5.98 5.98 0 0 0 4.567-.607 6 6 0 0 0 1.483-1.214m1.299-2.421a6 6 0 0 1-.15.477m3.047.3A9 9 0 1 1 3.307 9.67a9 9 0 1 1 17.386 4.66Z"/>`,
        },
        children,
      );
    };
  },
});
