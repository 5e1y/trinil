import { defineComponent, h } from 'vue';

export const Teepee = defineComponent({
  name: 'Teepee',
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
        innerHTML: `<path d="m12 16-1.972 3.945a.1.1 0 0 1-.09.055H4.175a.1.1 0 0 1-.086-.15L13.412 4M12 16l1.972 3.945a.1.1 0 0 0 .09.055h5.763a.1.1 0 0 0 .086-.15L10.588 4M12 16l-1.043-2"/>`,
      }, children);
    };
  },
});
