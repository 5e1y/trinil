import { defineComponent, h } from 'vue';

export const Discount = defineComponent({
  name: 'Discount',
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
          innerHTML: `<path d="m16 8-8 8m.56-11.745-.522-.074a2 2 0 0 0-2.25 1.635l-.091.519a2 2 0 0 1-1.033 1.42l-.465.248a2 2 0 0 0-.86 2.645l.232.474a2 2 0 0 1 0 1.756l-.232.474a2 2 0 0 0 .86 2.645l.465.247a2 2 0 0 1 1.033 1.421l.09.52a2 2 0 0 0 2.25 1.634l.523-.074a2 2 0 0 1 1.67.543l.38.367a2 2 0 0 0 2.78 0l.38-.367a2 2 0 0 1 1.67-.543l.522.074a2 2 0 0 0 2.25-1.634l.091-.52a2 2 0 0 1 1.033-1.42l.465-.248a2 2 0 0 0 .86-2.645l-.232-.474a2 2 0 0 1 0-1.756l.232-.474a2 2 0 0 0-.86-2.645l-.465-.247a2 2 0 0 1-1.033-1.421l-.09-.52a2 2 0 0 0-2.25-1.634l-.523.074a2 2 0 0 1-1.67-.543l-.38-.367a2 2 0 0 0-2.78 0l-.38.367a2 2 0 0 1-1.67.543ZM9 7.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>`,
        },
        children,
      );
    };
  },
});
