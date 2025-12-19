import { defineComponent, h } from 'vue';

export const CloudDownload = defineComponent({
  name: 'CloudDownload',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M6.03 10.556C4.36 11.082 3 12.586 3 14.68A4.32 4.32 0 0 0 7.32 19h5.78m-7.07-8.444a5 5 0 1 1 9.954-.155m-9.953.155A4.4 4.4 0 0 1 8 10.399a4.17 4.17 0 0 1 2 .884m5.984-.882c2.216-.345 4.57 1.1 4.96 3.557m-4.96-3.557a4.17 4.17 0 0 0-1.984.882m4 4.217v5m0 0 2-2m-2 2-2.016-2m4.96-4.542A5 5 0 0 0 13.1 19m7.844-5.042A5 5 0 1 1 13.1 19"/>`,
        },
        children,
      );
    };
  },
});
