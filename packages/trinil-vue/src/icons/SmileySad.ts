import { defineComponent, h } from 'vue';

export const SmileySad = defineComponent({
  name: 'SmileySad',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="m9.5 16 .168-.252a2.803 2.803 0 0 1 4.664 0L14.5 16M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Zm-5-9.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Zm8.5 0a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Z"/>`,
        },
        children,
      );
    };
  },
});
