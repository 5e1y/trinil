import { defineComponent, h } from 'vue';

export const Sun = defineComponent({
  name: 'Sun',
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
          innerHTML: `<path d="M12 5V2m7 10h3m-10 7v3M5 12H2m15-5 2.071-2.071M17 17l2.071 2.071M7 17l-2.071 2.071M7 7 4.929 4.929M16 12a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"/>`,
        },
        children,
      );
    };
  },
});
