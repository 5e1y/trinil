import { defineComponent, h } from 'vue';

export const Volume = defineComponent({
  name: 'Volume',
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
          innerHTML: `<path d="M16.5 18.616V5.384a.384.384 0 0 0-.597-.32l-4.151 2.768a1 1 0 0 1-.555.168H9.5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1.697a1 1 0 0 1 .555.168l4.151 2.768a.383.383 0 0 0 .597-.32Z"/>`,
        },
        children,
      );
    };
  },
});
