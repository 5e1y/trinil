import { defineComponent, h } from 'vue';

export const Liver = defineComponent({
  name: 'Liver',
  props: {
    size: { type: Number, default: 24 },
    color: { type: String, default: 'currentColor' },
    class: { type: String, default: undefined },
    title: { type: String, default: undefined },
    ariaLabel: { type: String, default: undefined },
  },
  setup(props) {
    return () => {
      const children = props.title ? [h('title', {}, props.title)] : [];
      return h('svg', {
        xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: props.color,
        'stroke-width': 1.5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'vector-effect': 'non-scaling-stroke',
        width: props.size, height: props.size, class: props.class, role: 'img', 'aria-label': props.ariaLabel,
        innerHTML: `<path d="m12 14.5-4 3.707a2.977 2.977 0 0 1-5-2.184v-5.34a4.59 4.59 0 0 1 5.412-4.517L13 7m-1 7.5h1.208a4.77 4.77 0 0 0 3.724-1.79l.212-.265c.235-.294.524-.54.85-.728l2.274-1.299a1.851 1.851 0 0 0-.41-3.387l-1.257-.36a3.3 3.3 0 0 0-1.223-.109L13 7m-1 7.5c-1.2-3.2.167-6.333 1-7.5"/>`,
      }, children);
    };
  },
});
