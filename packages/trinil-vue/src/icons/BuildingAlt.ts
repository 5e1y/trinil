import { defineComponent, h } from 'vue';

export const BuildingAlt = defineComponent({
  name: 'BuildingAlt',
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
          innerHTML: `<path d="M12 20h2.5M12 20V9.5M12 20H9.5m5 0h3m-3 0v-3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3m0 0H19a1 1 0 0 0 1-1v-8.882a1 1 0 0 0-.553-.894l-3-1.5a1 1 0 0 0-.894 0L12 9.5m0 0V6.618a1 1 0 0 0-.553-.894l-2.97-1.485a1 1 0 0 0-.941.025L4.506 5.99A1 1 0 0 0 4 6.858V19a1 1 0 0 0 1 1h1.5m3 0h-3m3 0v-3a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v3m9.5-6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM8 10a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"/>`,
        },
        children,
      );
    };
  },
});
