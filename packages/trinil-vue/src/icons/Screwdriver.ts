import { defineComponent, h } from 'vue';

export const Screwdriver = defineComponent({
  name: 'Screwdriver',
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
          innerHTML: `<path d="M12.5 11 11 12.5m1.5-1.5L7.586 6.086A2 2 0 0 1 7 4.672a.3.3 0 0 0-.147-.26L4.567 3.04a.1.1 0 0 0-.122.015l-1.39 1.39a.1.1 0 0 0-.015.122l1.372 2.286a.3.3 0 0 0 .26.147 2 2 0 0 1 1.414.586L11 12.5m1.5-1.5a.86.86 0 0 1 1.088-.108l2.098 1.398a15 15 0 0 1 5.096 5.773c.13.26.079.576-.128.783l-1.808 1.808a.68.68 0 0 1-.783.127 15 15 0 0 1-5.773-5.095l-1.398-2.098A.86.86 0 0 1 11 12.5"/>`,
        },
        children,
      );
    };
  },
});
