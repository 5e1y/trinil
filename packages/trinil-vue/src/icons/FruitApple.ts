import { defineComponent, h } from 'vue';

export const FruitApple = defineComponent({
  name: 'FruitApple',
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
          innerHTML: `<path d="M13.895 7.63c2.698-.741 5.605.45 5.605 4.87 0 5.33-2.818 9.721-7.088 8.167a1.2 1.2 0 0 0-.824 0C7.318 22.22 4.5 17.83 4.5 12.5c0-5.5 4.5-6 7.5-4m1.895-.87A6.6 6.6 0 0 0 12 8.5m1.895-.87c1.569-1.066 2.227-2.633 2.226-3.823 0-.476-.467-.775-.927-.652C11.978 4.016 11.845 7.263 12 8.5m1.895-.87A6.6 6.6 0 0 1 12 8.5m0 0-2-4"/>`,
        },
        children,
      );
    };
  },
});
