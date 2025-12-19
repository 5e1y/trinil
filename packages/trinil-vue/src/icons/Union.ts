import { defineComponent, h } from 'vue';

export const Union = defineComponent({
  name: 'Union',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M16 8V5a1 1 0 0 0-.293-.707M16 8h3c.276 0 .526.112.707.293M16 8l-8 8m0 0H5a1 1 0 0 1-.707-.293M8 16v3c0 .276.112.526.293.707M12 4h3c.276 0 .526.112.707.293M12 4l-8 8m8-8H8m-4 8v3c0 .276.112.526.293.707M4 12V8m0 0V5a1 1 0 0 1 1-1h3M4 8l4-4m12 8V9a1 1 0 0 0-.293-.707M20 12l-8 8m8-8v4m-8 4H9a1 1 0 0 1-.707-.293M12 20h4m0 0h3a1 1 0 0 0 1-1v-3m-4 4 4-4M8.293 19.707 19.707 8.293m-4-4L4.293 15.707"/>`,
        },
        children,
      );
    };
  },
});
