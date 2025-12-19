import { defineComponent, h } from 'vue';

export const Save = defineComponent({
  name: 'Save',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M7 20H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h9.586a1 1 0 0 1 .707.293l4.414 4.414a1 1 0 0 1 .293.707V19a1 1 0 0 1-1 1h-2M7 20v-6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v6M7 20h10"/>`,
        },
        children,
      );
    };
  },
});
