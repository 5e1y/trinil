import { defineComponent, h } from 'vue';

export const KeyframeLinear = defineComponent({
  name: 'KeyframeLinear',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M12 20.586a1 1 0 0 1-.707-.293l-7.586-7.586a1 1 0 0 1 0-1.414l7.586-7.586A1 1 0 0 1 12 3.414m0 17.172a1 1 0 0 0 .707-.293l7.586-7.586a1 1 0 0 0 0-1.414l-7.586-7.586A1 1 0 0 0 12 3.414m0 17.172V3.414"/>`,
        },
        children,
      );
    };
  },
});
