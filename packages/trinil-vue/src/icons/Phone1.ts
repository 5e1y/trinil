import { defineComponent, h } from 'vue';

export const Phone1 = defineComponent({
  name: 'Phone1',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M9.545 6.846a1 1 0 0 1-.105 1.29l-.697.697a.206.206 0 0 0-.028.256 20 20 0 0 0 6.136 6.136c.081.052.188.04.256-.028l.695-.695a1 1 0 0 1 1.293-.103l2.286 1.653c.366.265.508.74.3 1.14-.26.497-.675 1.177-1.244 1.746-1.035 1.035-2.568 1.455-3.906.86-4.292-1.907-7.848-5.483-10.184-10.247-.692-1.41-.31-3.083.801-4.194A5.3 5.3 0 0 1 6.89 4.198c.363-.148.758.006.986.324z"/>`,
        },
        children,
      );
    };
  },
});
