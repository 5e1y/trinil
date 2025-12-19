import { defineComponent, h } from 'vue';

export const AnimalRabbit = defineComponent({
  name: 'AnimalRabbit',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M5 11v2.016M5 11l3-5c1-2 0-3-1-2.5-4 2-4 7.5-2 7.5Zm0 0h5m-5 2.016v1.234c0 .966 1 2.25 2.5 2.25s2.5-1.284 2.5-2.25V12.2m-5 .816a7.4 7.4 0 0 0-1.5 4.471V19.5a1 1 0 0 0 1 1H6m4-8.3V11m0 1.2 1.323-.265c3.573-.714 6.916 1.889 7.162 5.46M10 11l3-5c1-2 0-3-1-2.5-4 2-4 7.5-2 7.5Zm8.5 8.618a1.5 1.5 0 1 0-.015-2.223m.015 2.223v-1.8q0-.213-.015-.423m.015 2.223a.88.88 0 0 1-.882.882H11m0 0H8.5m2.5 0a2.5 2.5 0 0 1 2.5-2.5h1M6 20.5V19m0 1.5h2.5m0 0V19"/>`,
        },
        children,
      );
    };
  },
});
