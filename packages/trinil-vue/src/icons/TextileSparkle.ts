import { defineComponent, h } from 'vue';

export const TextileSparkle = defineComponent({
  name: 'TextileSparkle',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M9.5 18c0-1-1-2-3-2s-3 1-3 2m6 0c0 1-1 2-3 2m3-2V8m-3 12c-2 0-3-1-3-2m3 2h13.9a.1.1 0 0 0 .1-.1v-9.4M3.5 18V6c0-1 1-2 3-2s3 1 3 2v2m0 0h5m1.49-2.402.049.01a3 3 0 0 1 2.353 2.353l.01.048c.021.108.175.108.196 0l.01-.048a3 3 0 0 1 2.353-2.353l.049-.01c.107-.022.107-.175 0-.196l-.049-.01a3 3 0 0 1-2.353-2.353l-.01-.049c-.021-.107-.175-.107-.196 0l-.01.049a3 3 0 0 1-2.353 2.353l-.049.01c-.107.021-.107.174 0 .196Zm-3 7.5.049.01a3 3 0 0 1 2.353 2.353l.01.048c.021.108.175.108.196 0l.01-.048a3 3 0 0 1 2.353-2.354l.049-.01c.107-.02.107-.174 0-.195l-.049-.01a3 3 0 0 1-2.353-2.353l-.01-.049c-.021-.107-.175-.107-.196 0l-.01.049a3 3 0 0 1-2.353 2.353l-.049.01c-.107.021-.107.174 0 .196Z"/>`,
        },
        children,
      );
    };
  },
});
