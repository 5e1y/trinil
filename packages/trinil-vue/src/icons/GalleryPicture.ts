import { defineComponent, h } from 'vue';

export const GalleryPicture = defineComponent({
  name: 'GalleryPicture',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M5 13.5V7a1 1 0 0 1 1-1h1m-2 7.5V20a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-1M5 13.5h1.217c1.233 0 2.416.52 3.288 1.444 1.508 1.6 3.85 1.906 5.68.742l.815-.52m0 0V7a1 1 0 0 0-1-1H7m9 9.167V19m0 0h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v2m2.505 4.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"/>`,
        },
        children,
      );
    };
  },
});
