import { defineComponent, h } from 'vue';

export const SuitcaseStickers = defineComponent({
  name: 'SuitcaseStickers',
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
          innerHTML: `<path d="M16 8h4a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h4m8 0-.544-1.632A2 2 0 0 0 13.559 5h-3.117a2 2 0 0 0-1.898 1.368L8 8m8 0H8m7.25 5.25-2.155-.718a.1.1 0 0 0-.127.063l-.936 2.81a.1.1 0 0 0 .063.127l2.81.936a.1.1 0 0 0 .127-.063l.635-1.905m-.417-1.25-.218-.655a.1.1 0 0 1 .063-.127l2.81-.936a.1.1 0 0 1 .127.063l.936 2.81a.1.1 0 0 1-.063.127l-2.81.936a.1.1 0 0 1-.127-.063l-.301-.905m-.417-1.25.417 1.25M8.5 12a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"/>`,
        },
        children,
      );
    };
  },
});
