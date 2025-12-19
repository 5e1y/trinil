import { defineComponent, h } from 'vue';

export const Bevel = defineComponent({
  name: 'Bevel',
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
          innerHTML: `<path d="M12 9v4.5M12 9l6.746-2.998M12 9 5.254 6.002M12 13.5 3.004 9.502M12 13.5l8.996-3.998M12 13.5v7.49m6.746-14.988-.023-.014-6.682-2.97a.1.1 0 0 0-.082 0l-6.682 2.97-.023.014m13.492 0a.1.1 0 0 1 .02.023l2.218 3.45q.008.012.012.027m-15.742-3.5a.1.1 0 0 0-.02.023l-2.218 3.45a.1.1 0 0 0-.012.027m0 0L3 9.529v7.406a.1.1 0 0 0 .06.091l8.9 3.956a.1.1 0 0 0 .04.008m8.996-11.488.004.027v7.406a.1.1 0 0 1-.06.091l-8.9 3.956a.1.1 0 0 1-.04.008"/>`,
        },
        children,
      );
    };
  },
});
