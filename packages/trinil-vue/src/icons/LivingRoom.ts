import { defineComponent, h } from 'vue';

export const LivingRoom = defineComponent({
  name: 'LivingRoom',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M5 9.5c-1.162 0-1.793-.625-1.983-.967a.1.1 0 0 1-.008-.069l.972-3.888a.1.1 0 0 1 .097-.076h1.844a.1.1 0 0 1 .097.076l.972 3.888a.1.1 0 0 1-.008.069c-.19.342-.821.967-1.983.967Zm0 0v10m13.727-4h-.25a.75.75 0 0 0-.75.75.75.75 0 0 1-.75.75h-5.719a.75.75 0 0 1-.75-.75.75.75 0 0 0-.75-.75h-.03m9 0h.772a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8.727a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1m9 0v-2a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v2M15.5 8h4a1 1 0 0 0 1-1V5.5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1V7a1 1 0 0 0 1 1Z"/>`,
        },
        children,
      );
    };
  },
});
