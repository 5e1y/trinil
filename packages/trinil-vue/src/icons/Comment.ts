import { defineComponent, h } from 'vue';

export const Comment = defineComponent({
  name: 'Comment',
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
          innerHTML: `<path d="M15 4.5H9a6 6 0 1 0 0 12h3.28c.43 0 .815.276 1.04.643.521.843 1.761 2.231 4.326 2.349a.34.34 0 0 0 .354-.346.4.4 0 0 0-.1-.253c-.53-.6-.748-1.44-.837-2.031-.064-.42.208-.79.588-.978A6 6 0 0 0 15 4.5Z"/>`,
        },
        children,
      );
    };
  },
});
