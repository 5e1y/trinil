import { defineComponent, h } from 'vue';

export const Artist = defineComponent({
  name: 'Artist',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M9 14H8a5 5 0 0 0-5 5 1 1 0 0 0 1 1h10a1 1 0 0 0 1-1 5 5 0 0 0-5-5zm0 0A5 5 0 1 1 9 4a5 5 0 0 1 0 10Zm10.967-4.057a2 2 0 0 0 .113-.06l.253-.145a1.598 1.598 0 0 0 .136-2.688l-.231-.166a1.78 1.78 0 0 1-.558-2.245l.142-.283a.246.246 0 0 0-.394-.284l-1.766 1.766a2.59 2.59 0 0 0 .428 4.007m1.877.098c-.6.292-1.31.255-1.877-.098m1.877.098a.5.5 0 0 1 .049.121c.317 1.302.395 2.652.228 3.982l-.682 5.458a.566.566 0 0 1-1.124 0l-.682-5.458a11 11 0 0 1 .202-3.872q.041-.174.132-.33"/>`,
        },
        children,
      );
    };
  },
});
