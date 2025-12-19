import { defineComponent, h } from 'vue';

export const CloudCheck = defineComponent({
  name: 'CloudCheck',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M6.03 10.556C4.36 11.082 3 12.586 3 14.68A4.32 4.32 0 0 0 7.32 19h5.78m-7.07-8.444a5 5 0 1 1 9.954-.155m-9.953.155A4.4 4.4 0 0 1 8 10.399a4.17 4.17 0 0 1 2 .884m5.984-.882c2.216-.345 4.57 1.1 4.96 3.557m-4.96-3.557a4.17 4.17 0 0 0-1.984.882M23 18a5 5 0 0 1-5 5m5-5c0-1.66-.81-3.133-2.056-4.042M23 18a5 5 0 0 0-5-5m0 10a5 5 0 0 1-4.9-4m4.9 4a5 5 0 0 1-5-5m0 0a5 5 0 0 1 5-5m-5 5q0 .515.1 1m4.9-6c1.1 0 2.118.356 2.944.958M18 15.5v5m0 0 2-2m-2 2-2-2"/>`,
        },
        children,
      );
    };
  },
});
