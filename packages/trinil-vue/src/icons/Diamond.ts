import { defineComponent, h } from 'vue';

export const Diamond = defineComponent({
  name: 'Diamond',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M12 5H7.48a1 1 0 0 0-.44.102M12 5h4.52a1 1 0 0 1 .44.102M12 5l-3 5m3-5 3 5m-6 0h6m-6 0L7.04 5.102M9 10H3.312M9 10l2.848 9.494M15 10l1.96-4.898M15 10h5.688M15 10l-2.848 9.494M7.04 5.102a1 1 0 0 0-.341.273L3.53 9.337a1 1 0 0 0-.218.663m13.647-4.898a1 1 0 0 1 .341.273l3.17 3.962c.155.194.227.43.218.663m0 0a1 1 0 0 1-.256.63l-7.689 8.544a1 1 0 0 1-.591.32M3.312 10a1 1 0 0 0 .256.63l7.689 8.544c.161.18.372.286.591.32m0 0q.151.023.304 0"/>`,
        },
        children,
      );
    };
  },
});
