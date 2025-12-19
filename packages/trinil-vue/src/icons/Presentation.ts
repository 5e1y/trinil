import { defineComponent, h } from 'vue';

export const Presentation = defineComponent({
  name: 'Presentation',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M20 17h2m-2 0V7a1 1 0 0 0-1-1h-5.417M20 17h-2.444M2 17h2m0 0V7a1 1 0 0 1 1-1h5.417M4 17h2.444m11.112 0L19 21m-1.444-4H6.444m0 0L5 21m8.583-15-.913-2.53a.712.712 0 0 0-1.34 0L10.417 6m3.166 0h-3.166"/>`,
        },
        children,
      );
    };
  },
});
