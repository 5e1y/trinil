import { defineComponent, h } from 'vue';

export const BookPageTurn = defineComponent({
  name: 'BookPageTurn',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="m12 20 .413-.184a9.48 9.48 0 0 1 8.001.142.404.404 0 0 0 .586-.362V7.48a.74.74 0 0 0-.439-.675A10 10 0 0 0 16 5.955M12 20l-.413-.184a9.48 9.48 0 0 0-8.001.142.405.405 0 0 1-.586-.362V7.48c0-.292.172-.556.439-.675a10 10 0 0 1 8.122 0L12 7m0 13V7m0 13 3.707-3.707a1 1 0 0 0 .293-.707v-9.63M12 7l3.397-3.883a.344.344 0 0 1 .603.227v2.612"/>`,
        },
        children,
      );
    };
  },
});
