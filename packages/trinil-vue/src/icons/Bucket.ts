import { defineComponent, h } from 'vue';

export const Bucket = defineComponent({
  name: 'Bucket',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M8.5 13a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 0c0-7.5 1.527-10.03 3.433-10.066C13.892 2.897 15 6.5 15 9m3.54 0H5.46a.46.46 0 0 0-.453.54L6.856 20.17a1 1 0 0 0 .985.83h8.318a1 1 0 0 0 .985-.83l1.85-10.632A.46.46 0 0 0 18.54 9Z"/>`,
        },
        children,
      );
    };
  },
});
