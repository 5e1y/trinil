import { defineComponent, h } from 'vue';

export const Bottle = defineComponent({
  name: 'Bottle',
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
        innerHTML: `<path d="M10 6 8.293 7.707A1 1 0 0 0 8 8.414v2.35a1 1 0 0 0 .106.447l.17.342a1 1 0 0 1 0 .894l-.17.342a1 1 0 0 0-.106.447V20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6.764a1 1 0 0 0-.106-.447l-.17-.342a1 1 0 0 1 0-.894l.17-.342a1 1 0 0 0 .106-.447v-2.35a1 1 0 0 0-.293-.707L14 6m-4 0V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2m-4 0h4"/>`,
      }, children);
    };
  },
});
