import { defineComponent, h } from 'vue';

export const Contrast = defineComponent({
  name: 'Contrast',
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
          innerHTML: `<path d="M12.5 12H21m0 0a9 9 0 0 0-.5-2.965M21 12c0 1.052-.18 2.062-.512 3m.012-5.965h-8m8 0A9 9 0 0 0 18.708 6m0 0a9 9 0 1 0 0 12m0-12H12.5m7.988 9H12.5m7.988 0a9 9 0 0 1-1.78 3m0 0H12.5"/>`,
        },
        children,
      );
    };
  },
});
