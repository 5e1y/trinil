import { defineComponent, h } from 'vue';

export const Delivery = defineComponent({
  name: 'Delivery',
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
          innerHTML: `<path d="M16.5 18.25a1.75 1.75 0 1 1 3.5 0m-3.5 0a1.75 1.75 0 1 0 3.5 0m-3.5 0h-2m-5 0a1.75 1.75 0 1 1-3.5 0m3.5 0a1.75 1.75 0 1 0-3.5 0m3.5 0h5m-8.5 0H3.669a1 1 0 0 1-.988-1.155l.72-4.595M20 18.25h.5a1 1 0 0 0 1-1v-2.447a1 1 0 0 0-.168-.555l-1.535-2.303a1 1 0 0 0-.832-.445h-3.427m-10.636-6h10.425a1 1 0 0 1 .987 1.158l-.776 4.842M14.5 18.25l1.038-6.75M8 8H3.402M7 10.5H2.402"/>`,
        },
        children,
      );
    };
  },
});
