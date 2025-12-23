import { defineComponent, h } from 'vue';

export const Opacity = defineComponent({
  name: 'Opacity',
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
        innerHTML: `<path d="M11 3.055a9 9 0 1 1-.147 17.873M6.5 4.876a9 9 0 0 1 2-1.17M3.761 8.372a9 9 0 0 1 .976-1.688m-1.695 4.44a9 9 0 0 0 .006 1.814m1.71 4.405a9 9 0 0 1-.997-1.714m4.572 4.593a9 9 0 0 1-1.65-.96"/>`,
      }, children);
    };
  },
});
