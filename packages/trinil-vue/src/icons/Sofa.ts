import { defineComponent, h } from 'vue';

export const Sofa = defineComponent({
  name: 'Sofa',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M5.5 10.5H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h.25m1.25-6V14m0-3.5v-2a1 1 0 0 1 1-1h5.75m6.75 3h1.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-.25m-1.25-6V14m0-3.5v-2a1 1 0 0 0-1-1h-5.75m-6.75 9H19m-13.5 0V14m0 2.5H4.25m14.75 0V14m0 2.5h1.25M5.5 14h6.75M19 14h-6.75m8 2.5V18m-16-1.5V18m8-10.5V14"/>`,
        },
        children,
      );
    };
  },
});
