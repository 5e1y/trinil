import { defineComponent, h } from 'vue';

export const ServerAlt = defineComponent({
  name: 'ServerAlt',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M13 8v.5m3-.5v.5m-3 7v.5m3-.5v.5M5 17.75a2 2 0 1 1 0-4m0 4a2 2 0 0 0 2-2m-2 2V20m2-4.25a2 2 0 0 0-2-2m2 2h3m-5-2v-3.5m5 5.5v1.75a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V14a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zm0-7.5V10a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V6.5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zm0 0H7m-2 2a2 2 0 1 1 0-4m0 4a2 2 0 0 0 2-2m0 0a2 2 0 0 0-2-2m0 0V4"/>`,
        },
        children,
      );
    };
  },
});
