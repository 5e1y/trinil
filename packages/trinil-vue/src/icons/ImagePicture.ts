import { defineComponent, h } from 'vue';

export const ImagePicture = defineComponent({
  name: 'ImagePicture',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M5 12V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v10M5 12v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6M5 12h1.549c1.57 0 3.074.623 4.184 1.733a5.92 5.92 0 0 0 7.229.89L19 14m-7-6a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"/>`,
        },
        children,
      );
    };
  },
});
