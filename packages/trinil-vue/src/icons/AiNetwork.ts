import { defineComponent, h } from 'vue';

export const AiNetwork = defineComponent({
  name: 'AiNetwork',
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
          innerHTML: `<path d="M15 19v-4m0-2.5v.5m-2.5 6-.385-2.5m0 0-.463-3.012a1.166 1.166 0 0 0-2.304 0L8.885 16.5m3.23 0h-3.23m0 0L8.5 19M4.25 7.376V13a2 2 0 0 0 2 2h.25M4.25 7.376a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM6.5 15v-4a1 1 0 0 1 1-1h2.25M6.5 15v5a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-1m-7.75-9V5.5m0 4.5h4.5m-4.5-4.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm4.5 4.5h2.25a1 1 0 0 1 1 1v8m-3.25-9V7.376m0 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm5.5-1.876V17a2 2 0 0 1-2 2h-.25m2.25-13.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"/>`,
        },
        children,
      );
    };
  },
});
