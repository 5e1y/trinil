import { defineComponent, h } from 'vue';

export const MegaphoneSound = defineComponent({
  name: 'MegaphoneSound',
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
          innerHTML: `<path d="M5 15a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h6.697a1 1 0 0 0 .555-.168l4.151-2.768a.384.384 0 0 1 .597.32v13.232a.384.384 0 0 1-.597.32l-4.151-2.768a1 1 0 0 0-.555-.168H10m-5 0c1.026 0 1.789.95 1.566 1.952L6.23 18.47a1 1 0 0 0 .812 1.203l1.004.168a1 1 0 0 0 1.145-.79L10 15m-5 0h5m9.5-4H22m-2.5-3.5L21 6m-1.5 8.5L21 16"/>`,
        },
        children,
      );
    };
  },
});
