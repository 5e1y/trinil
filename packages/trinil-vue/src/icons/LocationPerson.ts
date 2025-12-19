import { defineComponent, h } from 'vue';

export const LocationPerson = defineComponent({
  name: 'LocationPerson',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M12 10.5v.5m0-.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm0 .5v3m0-3s1.173.782 1.79 2M12 11s-1.173.782-1.79 2M12 14s1.116.833 1.311 2.5M12 14s-1.25.833-1.468 2.5m.715 3.64-4.28-4.892a7.39 7.39 0 0 1-1.818-5.232l.026-.524a6.833 6.833 0 0 1 13.65 0l.026.524a7.39 7.39 0 0 1-1.818 5.232l-4.28 4.892a1 1 0 0 1-1.506 0Z"/>`,
        },
        children,
      );
    };
  },
});
