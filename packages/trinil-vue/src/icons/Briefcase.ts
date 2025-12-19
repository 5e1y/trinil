import { defineComponent, h } from 'vue';

export const Briefcase = defineComponent({
  name: 'Briefcase',
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
          innerHTML: `<path d="M16 8h4a1 1 0 0 1 1 1v3m-5-4-.544-1.632A2 2 0 0 0 13.559 5h-3.117a2 2 0 0 0-1.898 1.368L8 8m8 0H8m0 0H4a1 1 0 0 0-1 1v3m18 0v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6m18 0-8 1M3 12l8 1m2 0v-.5a1 1 0 1 0-2 0v.5m2 0v1a1 1 0 1 1-2 0v-1"/>`,
        },
        children,
      );
    };
  },
});
