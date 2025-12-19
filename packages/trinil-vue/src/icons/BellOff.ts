import { defineComponent, h } from 'vue';

export const BellOff = defineComponent({
  name: 'BellOff',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="m7.667 18.5 8.109-12.163M7.666 18.5 6 21m1.667-2.5h11.418a.415.415 0 0 0 .381-.578l-.087-.205A17.1 17.1 0 0 1 18 11a5.99 5.99 0 0 0-2.224-4.663M4.5 18l.121-.283A17.05 17.05 0 0 0 6 11a6 6 0 0 1 3.504-5.458.65.65 0 0 0 .385-.545 2.114 2.114 0 0 1 4.135-.497M18 3l-2.224 3.337"/>`,
        },
        children,
      );
    };
  },
});
