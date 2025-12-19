import { defineComponent, h } from 'vue';

export const SoftShadow = defineComponent({
  name: 'SoftShadow',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="m14.914 15.086-5.581 5.581m8.927-4.927L13 21m7.749-3.749-3.223 3.223m-11.188-.812 2.724-2.724m0 0q.46.061.938.062c1.867 0 3.563-.73 4.818-1.922a7 7 0 1 0-5.756 1.86Z"/>`,
        },
        children,
      );
    };
  },
});
