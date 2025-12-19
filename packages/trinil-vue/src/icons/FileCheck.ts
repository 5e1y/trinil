import { defineComponent, h } from 'vue';

export const FileCheck = defineComponent({
  name: 'FileCheck',
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
          innerHTML: `<path d="M23 18a5 5 0 0 1-5 5m5-5a5 5 0 0 0-4-4.9m4 4.9a5 5 0 0 0-5-5m0 10a5 5 0 0 1-4-2m4 2a5 5 0 0 1-5-5m0 0a5 5 0 0 1 5-5m-5 5c0 1.126.372 2.164 1 3m4-8q.515 0 1 .1m0 0V8.414A1 1 0 0 0 18.91 8M14 21H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.586a1 1 0 0 1 .414.09M18.91 8H15a1 1 0 0 1-1-1V3.09M18.91 8a1 1 0 0 0-.203-.293l-4.414-4.414A1 1 0 0 0 14 3.09M16 18l1.43 1.43a.1.1 0 0 0 .14 0L20 17"/>`,
        },
        children,
      );
    };
  },
});
