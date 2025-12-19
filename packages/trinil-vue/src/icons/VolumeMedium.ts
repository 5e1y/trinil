import { defineComponent, h } from 'vue';

export const VolumeMedium = defineComponent({
  name: 'VolumeMedium',
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
          innerHTML: `<path d="M15.5 8.667c1.987 1.84 1.987 4.825 0 6.666m2.159-8c2.782 2.578 2.782 6.756 0 9.334M6.5 16h1.697a1 1 0 0 1 .555.168l4.151 2.768a.383.383 0 0 0 .597-.32V5.384a.384.384 0 0 0-.597-.32L8.752 7.832A1 1 0 0 1 8.197 8H6.5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2Z"/>`,
        },
        children,
      );
    };
  },
});
