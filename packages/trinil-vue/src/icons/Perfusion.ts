import { defineComponent, h } from 'vue';

export const Perfusion = defineComponent({
  name: 'Perfusion',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M12 21h3.5m0 0H19m-3.5 0V5.997a2.997 2.997 0 1 0-5.994 0v.259m0 0A4.8 4.8 0 0 0 11.034 6a1.064 1.064 0 0 1 1.407 1.007v3.52a1.39 1.39 0 0 1-.941 1.314 6.3 6.3 0 0 1-1.994.334m0-5.92a4.8 4.8 0 0 1-1.532-.245l-.035-.012a1.09 1.09 0 0 0-1.433 1.033v3.47c0 .61.39 1.15.966 1.342l.035.011a6.3 6.3 0 0 0 1.999.321m0 0c.167 1.442.002 4.625-1.999 5.825"/>`,
        },
        children,
      );
    };
  },
});
