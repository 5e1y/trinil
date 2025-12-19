import { defineComponent, h } from 'vue';

export const RenderPreview = defineComponent({
  name: 'RenderPreview',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M20.982 7.008a.1.1 0 0 0-.041-.035l-4.45-1.977m4.491 2.012a.1.1 0 0 1 .018.057V12m-.018-4.992-4.49 1.996M3.017 7.008a.1.1 0 0 1 .041-.035l8.9-3.955a.1.1 0 0 1 .082 0l4.45 1.978M3.018 7.008A.1.1 0 0 0 3 7.065v9.87a.1.1 0 0 0 .06.091l4.45 1.978M3.017 7.008l4.49 1.996M12 20.99a.1.1 0 0 1-.04-.008l-4.45-1.978M12 20.99a.1.1 0 0 0 .04-.008l1.522-.676M12 20.99v-4.995m4.49-11L12 7m0 4L7.509 9.004M12 11l4.491-1.996M12 11v4.995M7.509 9.004 11.999 7M7.51 9.004v5m0 5v-5M12 7l4.492 2.004m0 0v4.228M12 15.995l-4.49-1.991M12 15.995l1.885-.835M21 12l-2.346 1.042M21 12v2m-2.086 4.914a2 2 0 1 1-2.828-2.828 2 2 0 0 1 2.828 2.828Zm0 0L20 20m-1.346-6.958a5.05 5.05 0 0 0-2.163.19m2.163-.19A5 5 0 0 1 21 14m0 0a5 5 0 1 1-7.438 6.306m.323-5.147A4.98 4.98 0 0 0 13 18c0 .832.203 1.616.562 2.306m.323-5.147a5 5 0 0 1 2.606-1.927"/>`,
        },
        children,
      );
    };
  },
});
