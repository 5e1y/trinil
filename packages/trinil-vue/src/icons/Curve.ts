import { defineComponent, h } from 'vue';

export const Curve = defineComponent({
  name: 'Curve',
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
          innerHTML: `<path d="M10.5 7.124V9.5a1 1 0 0 1-1 1H7.124M10.5 7.124A15.93 15.93 0 0 1 20 4m-9.5 3.124a.624.624 0 0 0-.624-.624H7.5a1 1 0 0 0-1 1v2.376c0 .345.28.624.624.624M4 20c0-3.557 1.16-6.843 3.124-9.5"/>`,
        },
        children,
      );
    };
  },
});
