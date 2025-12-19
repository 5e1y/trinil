import { defineComponent, h } from 'vue';

export const Hdri = defineComponent({
  name: 'Hdri',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M21 16a9 9 0 1 0-18 0m18 0c0 1.657-4.03 3.5-9 3.5S3 17.657 3 16m18 0c0-1.657-4.03-3-9-3s-9 1.343-9 3m9-11.5v-1m5.75 2.538.5-.866m-12.49 0 .5.866"/>`,
        },
        children,
      );
    };
  },
});
