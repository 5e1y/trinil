import { defineComponent, h } from 'vue';

export const Wifi = defineComponent({
  name: 'Wifi',
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
          innerHTML: `<path d="M5 12c3.866-3.866 10.134-3.866 14 0M7 15a7.07 7.07 0 0 1 10 0M3 9c4.97-4.97 13.03-4.97 18 0m-8.25 9a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"/>`,
        },
        children,
      );
    };
  },
});
