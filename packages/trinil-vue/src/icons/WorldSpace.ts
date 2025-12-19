import { defineComponent, h } from 'vue';

export const WorldSpace = defineComponent({
  name: 'WorldSpace',
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
          innerHTML: `<path d="M3.018 16.711 2.5 18.643m0 0 1.932.517M2.5 18.644 7 16.07m14 .64.518 1.932m0 0-1.932.517m1.932-.517-4.5-2.572M12 7.5V3m0 0-1.5 1.5M12 3l1.5 1.5m5.5 9a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>`,
        },
        children,
      );
    };
  },
});
