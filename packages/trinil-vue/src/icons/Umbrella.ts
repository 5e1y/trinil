import { defineComponent, h } from 'vue';

export const Umbrella = defineComponent({
  name: 'Umbrella',
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
          innerHTML: `<path d="M8 18v1a2 2 0 1 0 4 0v-8.972m0 0c.804 0 1.609.161 2.363.485l1.094.469a.1.1 0 0 0 .084-.003l.351-.175a5.31 5.31 0 0 1 4.955.108.102.102 0 0 0 .152-.089c-.007-.607-.056-1.215-.235-1.794-.692-2.25-2.376-4.134-5.691-5.273a9.5 9.5 0 0 0-6.146 0c-3.315 1.14-4.999 3.023-5.691 5.273-.179.58-.228 1.187-.235 1.794 0 .078.084.126.152.089a5.31 5.31 0 0 1 4.955-.108l.35.175a.1.1 0 0 0 .085.003l1.094-.47A6 6 0 0 1 12 10.029Z"/>`,
        },
        children,
      );
    };
  },
});
