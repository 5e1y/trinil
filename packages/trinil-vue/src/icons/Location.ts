import { defineComponent, h } from 'vue';

export const Location = defineComponent({
  name: 'Location',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="m6.967 15.248 4.958 5.666a.1.1 0 0 0 .15 0l4.958-5.666a7.39 7.39 0 0 0 1.818-5.232l-.026-.524a6.833 6.833 0 0 0-13.65 0l-.026.524a7.39 7.39 0 0 0 1.818 5.232Z"/>`,
        },
        children,
      );
    };
  },
});
