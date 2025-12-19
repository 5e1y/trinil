import { defineComponent, h } from 'vue';

export const LightSpot = defineComponent({
  name: 'LightSpot',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M9 7 5.056 18.181M15 7l3.944 11.181M12 8v13m0 0c3.866 0 7-1.12 7-2.5 0-1.133-2.108-2.09-5-2.396M12 21c-3.866 0-7-1.12-7-2.5 0-1.133 2.109-2.09 5-2.396M13.5 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>`,
        },
        children,
      );
    };
  },
});
