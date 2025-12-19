import { defineComponent, h } from 'vue';

export const VideoOff = defineComponent({
  name: 'VideoOff',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M15 15v2a1 1 0 0 1-1 1H8m7-3V9m0 6 5.41 2.951a.4.4 0 0 0 .59-.35V6.399a.398.398 0 0 0-.59-.35L15 9m0 0V7.5M18 3l-3 4.5m0 0L8 18m0 0-2 3m-1-3H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h9"/>`,
        },
        children,
      );
    };
  },
});
