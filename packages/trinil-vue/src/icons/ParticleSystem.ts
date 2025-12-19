import { defineComponent, h } from 'vue';

export const ParticleSystem = defineComponent({
  name: 'ParticleSystem',
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
          innerHTML: `<path d="M17.5 6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 0h-8m-3 11a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0 0v-8m8.879 5.879a3 3 0 1 0 4.243 4.243 3 3 0 0 0-4.243-4.243Zm0 0L8.62 8.62M9.5 6.5a3 3 0 1 0-3 3m3-3a3 3 0 0 1-.879 2.121M6.5 9.5a3 3 0 0 0 2.121-.879"/>`,
        },
        children,
      );
    };
  },
});
