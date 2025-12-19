import { defineComponent, h } from 'vue';

export const StomachCross = defineComponent({
  name: 'StomachCross',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M11.5 3.5v1.257a3 3 0 0 0 .879 2.122c.606.606.522 1.619-.25 1.99a9.5 9.5 0 0 1-4.611.922l-.316-.017c-2.601-.137-4.605 2.262-4.009 4.797l.085.358c.16.68.481 1.29.92 1.792.182.21.302.47.302.749v3.03m10-17v.672a2 2 0 0 0 .586 1.414c.548.548 1.353.713 2.124.782a3.6 3.6 0 0 1 2.653 1.545l.241.349c1.076 1.554.89 3.667-.403 5.035M7.518 20.5v-1.297c0-.566.47-1.017 1.036-1.033a16.2 16.2 0 0 0 4.482-.774m0 0Q13 17.694 13 18a5 5 0 1 0 6.7-4.703m-6.664 4.1a5 5 0 0 1 6.665-4.1M18 18l1.5-1.5M18 18l1.5 1.5M18 18l-1.5 1.5M18 18l-1.5-1.5"/>`,
        },
        children,
      );
    };
  },
});
