import { defineComponent, h } from 'vue';

export const RamStrips = defineComponent({
  name: 'RamStrips',
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
          innerHTML: `<path d="M3.5 15.5v1.9a.1.1 0 0 0 .1.1h4.3a.1.1 0 0 0 .1-.1v-1.9m-4.5 0H8m-4.5 0A.5.5 0 0 1 3 15v-3.5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1V15a.5.5 0 0 1-.5.5m0 0v1.9a.1.1 0 0 1-.1.1h-6.3a.1.1 0 0 1-.1-.1v-1.9m6.5 0H10m0 0H8M19.5 14h.65a.1.1 0 0 0 .1-.1v-1.525c0-.207.168-.375.375-.375a.375.375 0 0 0 .375-.375V8a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1"/>`,
        },
        children,
      );
    };
  },
});
