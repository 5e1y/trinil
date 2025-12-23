import { defineComponent, h } from 'vue';

export const List = defineComponent({
  name: 'List',
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
        innerHTML: `<path d="M10.5 12h9m-9-7h9m-9 14h9m-14 0A.75.75 0 1 1 4 19a.75.75 0 0 1 1.5 0Zm0-14A.75.75 0 1 1 4 5a.75.75 0 0 1 1.5 0Zm0 7A.75.75 0 1 1 4 12a.75.75 0 0 1 1.5 0Z"/>`,
      }, children);
    };
  },
});
