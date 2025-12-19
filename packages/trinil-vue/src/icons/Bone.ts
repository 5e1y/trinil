import { defineComponent, h } from 'vue';

export const Bone = defineComponent({
  name: 'Bone',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M19 5a2 2 0 1 0-3.483 1.342.104.104 0 0 1-.002.143l-9.03 9.03a.104.104 0 0 1-.143.002A2 2 0 1 0 5 19M19 5a2 2 0 1 1-1.342 3.483.104.104 0 0 0-.143.002l-9.03 9.03a.104.104 0 0 0-.002.143A2 2 0 1 1 5 19M19 5c0 .364-.097.706-.268 1M5 19c0-.364.097-.706.268-1"/>`,
        },
        children,
      );
    };
  },
});
