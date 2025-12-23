import { defineComponent, h } from 'vue';

export const Dance = defineComponent({
  name: 'Dance',
  props: {
    size: { type: Number, default: 24 },
    color: { type: String, default: 'currentColor' },
    class: { type: String, default: undefined },
    title: { type: String, default: undefined },
    ariaLabel: { type: String, default: undefined },
  },
  setup(props) {
    return () => {
      const children = props.title ? [h('title', {}, props.title)] : [];
      return h('svg', {
        xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: props.color,
        'stroke-width': 1.5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'vector-effect': 'non-scaling-stroke',
        width: props.size, height: props.size, class: props.class, role: 'img', 'aria-label': props.ariaLabel,
        innerHTML: `<path d="M12 8.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm0 0V15m0-6.5 1.524 1.83a1.138 1.138 0 0 0 1.821-.098l.077-.115a1.59 1.59 0 0 1 2.078-.522M12 8.5l-1.68 2.016a.838.838 0 0 1-1.393-.162l-.047-.093A1.59 1.59 0 0 0 7 9.447M12 15l-.949 2.846a1 1 0 0 0-.051.316V21.5m1-6.5 2.09.836a1 1 0 0 1 .565.577l1.158 3.087"/>`,
      }, children);
    };
  },
});
