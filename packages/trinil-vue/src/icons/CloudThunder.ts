import { defineComponent, h } from 'vue';

export const CloudThunder = defineComponent({
  name: 'CloudThunder',
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
          innerHTML: `<path d="M12.535 9a4.01 4.01 0 0 1 2.375-1.85M10 7.535a4.012 4.012 0 0 0-2.899-.434m7.809.05Q15.43 7 16 7a4 4 0 0 1 0 8h-1.5m.41-7.85A4.001 4.001 0 0 0 7.1 7.101m0 0A4.002 4.002 0 0 0 8 15h1.5m0 0-.945 2.363a.1.1 0 0 0 .093.137h1.69a.1.1 0 0 1 .09.145L9.5 19.5m0-4.5h5m0 0-1.428 2.855a.1.1 0 0 0 .09.145h2.161a.1.1 0 0 1 .086.151L14 20.5"/>`,
        },
        children,
      );
    };
  },
});
