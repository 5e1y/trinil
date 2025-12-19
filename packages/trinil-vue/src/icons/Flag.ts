import { defineComponent, h } from 'vue';

export const Flag = defineComponent({
  name: 'Flag',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M5 21v-6m0 0V5.387a1 1 0 0 1 1.316-.948l.429.143c1.77.59 3.697.479 5.387-.309a7.3 7.3 0 0 1 5.569-.244l.64.232A1 1 0 0 1 19 5.2v8.917a.97.97 0 0 1-1.299.91 7.3 7.3 0 0 0-5.569.245 7.3 7.3 0 0 1-5.387.309z"/>`,
        },
        children,
      );
    };
  },
});
