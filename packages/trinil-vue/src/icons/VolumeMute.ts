import { defineComponent, h } from 'vue';

export const VolumeMute = defineComponent({
  name: 'VolumeMute',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="m15 9 3 3m0 0 3 3m-3-3-3 3m3-3 3-3m-9-3.616v13.232a.384.384 0 0 1-.597.32l-4.151-2.768A1 1 0 0 0 6.697 16H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1.697a1 1 0 0 0 .555-.168l4.151-2.768a.384.384 0 0 1 .597.32Z"/>`,
        },
        children,
      );
    };
  },
});
