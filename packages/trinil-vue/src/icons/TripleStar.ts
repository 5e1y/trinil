import { defineComponent, h } from 'vue';

export const TripleStar = defineComponent({
  name: 'TripleStar',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M6.91 12.682a.1.1 0 0 1 .18 0l1.085 2.2 2.428.353a.1.1 0 0 1 .056.17l-1.757 1.713.415 2.418a.1.1 0 0 1-.145.106L7 18.5l-2.172 1.142a.1.1 0 0 1-.145-.106l.415-2.418-1.757-1.713a.1.1 0 0 1 .055-.17l2.428-.353zM16.91 12.682a.1.1 0 0 1 .18 0l1.085 2.2 2.428.353a.1.1 0 0 1 .056.17l-1.757 1.713.415 2.418a.1.1 0 0 1-.145.106L17 18.5l-2.172 1.142a.1.1 0 0 1-.145-.106l.415-2.418-1.757-1.713a.1.1 0 0 1 .055-.17l2.428-.353zM11.91 3.682a.1.1 0 0 1 .18 0l1.085 2.2 2.428.353a.1.1 0 0 1 .056.17l-1.757 1.713.415 2.418a.1.1 0 0 1-.145.106L12 9.5l-2.172 1.142a.1.1 0 0 1-.145-.106l.415-2.418L8.34 6.405a.1.1 0 0 1 .055-.17l2.428-.353z"/>`,
        },
        children,
      );
    };
  },
});
