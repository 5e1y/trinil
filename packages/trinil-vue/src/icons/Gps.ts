import { defineComponent, h } from 'vue';

export const Gps = defineComponent({
  name: 'Gps',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M21 12h-2m2 0a8.97 8.97 0 0 1-2.636 6.364M21 12a8.97 8.97 0 0 0-2.636-6.364M3 12h2m-2 0a8.97 8.97 0 0 1 2.636-6.364M3 12a8.97 8.97 0 0 0 2.636 6.364M12 3v2m0-2a8.97 8.97 0 0 1 6.364 2.636M12 3a8.97 8.97 0 0 0-6.364 2.636M12 21v-2m0 2a8.97 8.97 0 0 0 6.364-2.636M12 21a8.97 8.97 0 0 1-6.364-2.636m12.728 0L17 17m1.364-11.364L17 7M5.636 5.636 7 7M5.636 18.364 7 17m4.559-8.673-3.03 5.68a.5.5 0 0 0 .563.72l2.665-.666a1 1 0 0 1 .486 0l2.665.666a.5.5 0 0 0 .562-.72l-3.029-5.68a.5.5 0 0 0-.882 0Z"/>`,
        },
        children,
      );
    };
  },
});
