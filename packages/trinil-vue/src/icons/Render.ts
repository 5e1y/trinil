import { defineComponent, h } from 'vue';

export const Render = defineComponent({
  name: 'Render',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M12 11 7.509 9.004M12 11l4.491-1.996M12 11v4.995m8.982-8.987a.1.1 0 0 0-.041-.035l-4.45-1.977m4.491 2.012a.1.1 0 0 1 .018.057V12m-.018-4.992-4.49 1.996M3.017 7.008a.1.1 0 0 1 .041-.035l4.45-1.977 4.45-1.978a.1.1 0 0 1 .082 0l4.45 1.978M3.018 7.008A.1.1 0 0 0 3 7.065v9.87a.1.1 0 0 0 .06.091l4.45 1.978M3.017 7.008l4.49 1.996M12 20.99a.1.1 0 0 1-.04-.008l-4.45-1.978M12 20.99a.1.1 0 0 0 .04-.008l4.45-1.978M12 20.99v-4.995m4.49-11L12 7M7.509 9.004 11.999 7M7.51 9.004v5m0 5v-5M12 7l4.492 2.004m0 0v5m0 5 4.45-1.978a.1.1 0 0 0 .059-.091V12m-4.51 7.004v-5M12 15.995l-4.49-1.991M12 15.995l4.49-1.991m0 0L21 12"/>`,
        },
        children,
      );
    };
  },
});
