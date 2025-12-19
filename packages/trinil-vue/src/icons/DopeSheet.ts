import { defineComponent, h } from 'vue';

export const DopeSheet = defineComponent({
  name: 'DopeSheet',
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
          innerHTML: `<path d="m10 7 1.93-1.93a.1.1 0 0 1 .14 0L14 7m-4 0 1.93 1.93a.1.1 0 0 0 .14 0L14 7m-4 0H5.5M14 7h2m0 0 1.93-1.93a.1.1 0 0 1 .14 0L20 7m-4 0 1.93 1.93a.1.1 0 0 0 .14 0L20 7m0 0h1M3 7h.5m3 5 1.93-1.93a.1.1 0 0 1 .14 0L10.5 12m-4 0 1.93 1.93a.1.1 0 0 0 .14 0L10.5 12m-4 0h-1m5 0H13m0 0 1.93-1.93a.1.1 0 0 1 .14 0L17 12m-4 0 1.93 1.93a.1.1 0 0 0 .14 0L17 12m0 0h4M3 12h.5m6.5 5 1.93-1.93a.1.1 0 0 1 .14 0L14 17m-4 0 1.93 1.93a.1.1 0 0 0 .14 0L14 17m-4 0H5.5m8.5 0h7M3 17h.5"/>`,
        },
        children,
      );
    };
  },
});
