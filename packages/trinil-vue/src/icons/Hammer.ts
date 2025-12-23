import { defineComponent, h } from 'vue';

export const Hammer = defineComponent({
  name: 'Hammer',
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
        innerHTML: `<path d="m10.5 7.5 10.293 10.293a1 1 0 0 1 0 1.414l-1.086 1.086a1 1 0 0 1-1.414 0L8 10m2.5-2.5L8 10m2.5-2.5a2 2 0 0 1 2-2 1 1 0 1 0 0-2H7.914a1 1 0 0 0-.707.293l-2.51 2.51a.67.67 0 0 0-.197.476 1 1 0 0 1-.684.949l-.592.197a1 1 0 0 0-.39.242l-.263.262a.1.1 0 0 0 0 .142l3.358 3.358a.1.1 0 0 0 .142 0l.262-.262a1 1 0 0 0 .242-.39l.197-.593A1 1 0 0 1 7.721 10H8"/>`,
      }, children);
    };
  },
});
