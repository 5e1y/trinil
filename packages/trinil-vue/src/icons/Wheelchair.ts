import { defineComponent, h } from 'vue';

export const Wheelchair = defineComponent({
  name: 'Wheelchair',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M3 4h1.5a2 2 0 0 1 2 2v3.506M19.5 17v-2a2 2 0 0 0-2-2h-2.136m4.136 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-4.136-4A5.752 5.752 0 0 0 6.5 9.506M15.364 13q.135.604.136 1.25a5.75 5.75 0 1 1-9-4.744M11 14.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"/>`,
        },
        children,
      );
    };
  },
});
