import { defineComponent, h } from 'vue';

export const Bank = defineComponent({
  name: 'Bank',
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
          innerHTML: `<path d="M12 17V8.5m0 8.5H9m3 0h3m-3-8.5H9m3 0h3m3 0h.5a1 1 0 0 0 1-1v-.232a1 1 0 0 0-.742-.966l-6.5-1.733a1 1 0 0 0-.516 0l-6.5 1.733a1 1 0 0 0-.742.966V7.5a1 1 0 0 0 1 1H6m12 0V17m0-8.5h-3m3 8.5h.382a1 1 0 0 1 .894.553l.681 1.362a.404.404 0 0 1-.361.585H4.405a.405.405 0 0 1-.362-.585l.68-1.362A1 1 0 0 1 5.619 17H6m12 0h-3M6 8.5V17m0-8.5h3M6 17h3m0-8.5V17m6-8.5V17"/>`,
        },
        children,
      );
    };
  },
});
