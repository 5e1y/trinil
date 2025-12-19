import { defineComponent, h } from 'vue';

export const IsometricView = defineComponent({
  name: 'IsometricView',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="m7.5 8 2.25-2M7.5 8l-2.25 2M7.5 8l9 8M9.75 6l2.184-1.941a.1.1 0 0 1 .132 0L14.25 6m-4.5 0 9 8M16.5 8l-2.25-2m2.25 2 2.25 2M16.5 8l-9 8m6.75-10-9 8m13.5-4 2.166 1.925a.1.1 0 0 1 0 .15L18.75 14m0-4-9 8m6.75-2 2.25-2m-2.25 2-2.25 2m0 0-2.184 1.94a.1.1 0 0 1-.132 0L9.75 18m4.5 0-9-8m2.25 6 2.25 2M7.5 16l-2.25-2m0 0-2.166-1.925a.1.1 0 0 1 0-.15L5.25 10"/>`,
        },
        children,
      );
    };
  },
});
