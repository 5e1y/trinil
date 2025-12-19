import { defineComponent, h } from 'vue';

export const CameraTarget = defineComponent({
  name: 'CameraTarget',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="m10.043 12.87-.943.944c-.26.26-.7.242-.982-.04L3.01 8.668c-.282-.282-.3-.722-.04-.983l4.714-4.714c.26-.26.7-.242.983.04l5.106 5.107c.283.282.3.721.04.982l-.943.943m-2.828 2.828 2.828-2.828m-2.828 2.828 1.371 4.154q.023.069.075.12c.112.113.287.12.391.017l5.281-5.282c.104-.104.097-.279-.015-.391a.3.3 0 0 0-.12-.075l-4.155-1.371M19 20.5a1.5 1.5 0 0 1-1.5-1.5m1.5 1.5a1.5 1.5 0 0 0 1.5-1.5M19 20.5v1M17.5 19a1.5 1.5 0 0 1 1.5-1.5M17.5 19h-1m4 0a1.5 1.5 0 0 0-1.5-1.5m1.5 1.5h1M19 17.5v-1m-4.48-1.98 3.42 3.42"/>`,
        },
        children,
      );
    };
  },
});
