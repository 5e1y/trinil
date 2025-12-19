import { defineComponent, h } from 'vue';

export const Microscope = defineComponent({
  name: 'Microscope',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M3.5 17h4m0 0v3a1 1 0 0 0 1 1H19a1 1 0 0 0 1-1v-1.32a10 10 0 0 0-5.528-8.944L13 9m-5.5 8h4M13 9l1.553-3.105a1 1 0 0 0-.447-1.342l-2.212-1.105a1 1 0 0 0-1.341.447l-3.106 6.21a1 1 0 0 0 .447 1.343L8 11.5M13 9l-1.553 3.106a1 1 0 0 1-1.341.447L10 12.5m-2-1-.553 1.106a1 1 0 0 0 .447 1.342l.212.105a1 1 0 0 0 1.341-.447L10 12.5m-2-1 2 1"/>`,
        },
        children,
      );
    };
  },
});
