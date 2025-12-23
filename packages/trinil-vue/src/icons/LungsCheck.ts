import { defineComponent, h } from 'vue';

export const LungsCheck = defineComponent({
  name: 'LungsCheck',
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
        innerHTML: `<path d="M12 7.116h.72a1 1 0 0 0 .97-.758l.566-2.265a.974.974 0 0 1 1.212-.7c1.585.452 2.508 1.736 3.365 3.22.167.29.796 1.503.993 2.24.473 1.765.62 3.075.66 4.808M12 7.116h-.807a1 1 0 0 1-.936-.65l-.954-2.541a.897.897 0 0 0-1.123-.536C6.808 3.846 6 4.616 5.273 6.296c-.354.82-.628 1.669-.923 2.77-.415 1.55-.811 3.05-.811 5.202 0 2.816 1.443 5.414 4.15 6.187l.104.03a1.966 1.966 0 0 0 2.492-1.647s.678-3.47.715-5.722c.006-.343 0-.877 0-.877a1.123 1.123 0 0 1 2.213-.273l.08.324c.138.549.335 1.081.588 1.587l.103.207q.15.301.259.617M12 7.116v-4M16 18l1.43 1.43a.1.1 0 0 0 .14 0L20 17m.486-3.34A5 5 0 0 0 18 13c-1.497 0-2.84.658-3.757 1.7m6.243-1.04a5 5 0 1 1-6.243 1.04"/>`,
      }, children);
    };
  },
});
