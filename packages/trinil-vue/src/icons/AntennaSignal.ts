import { defineComponent, h } from 'vue';

export const AntennaSignal = defineComponent({
  name: 'AntennaSignal',
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
          innerHTML: `<path d="M14.5 5.169A5 5 0 0 1 17 9.5c0 1.688-.836 3.18-2.116 4.085M9.5 5.17A5 5 0 0 0 7 9.5c0 1.688.836 3.18 2.116 4.085m6.642-10.577A7.5 7.5 0 0 1 19.5 9.5a7.49 7.49 0 0 1-3.174 6.128M8.242 3.008A7.5 7.5 0 0 0 4.5 9.5a7.49 7.49 0 0 0 3.174 6.128m4.957-3.708a2.5 2.5 0 0 1-1.262 0m1.262 0a2.501 2.501 0 1 0-1.262 0m1.262 0 .793 3.04m-2.055-3.04-.793 3.04M9.783 18l-.456 1.748A1 1 0 0 0 10.294 21h3.412a1 1 0 0 0 .967-1.252L14.217 18m-4.434 0h4.434m-4.434 0 .793-3.04M14.217 18l-.793-3.04m0 0h-2.848"/>`,
        },
        children,
      );
    };
  },
});
