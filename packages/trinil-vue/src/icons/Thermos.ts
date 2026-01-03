import { defineComponent, h } from 'vue';

export const Thermos = defineComponent({
  name: 'Thermos',
  props: {
    size: { type: Number, default: 24 },
    color: { type: String, default: 'currentColor' },
    strokeWidth: { type: Number, default: 1.5 },
    class: { type: String, default: undefined },
    title: { type: String, default: undefined },
    ariaLabel: { type: String, default: undefined },
  },
  setup(props) {
    return () => {
      const children = props.title ? [h('title', {}, props.title)] : [];
      return h('svg', {
        xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: props.color,
        'stroke-width': props.strokeWidth, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'vector-effect': 'non-scaling-stroke',
        width: props.size, height: props.size, class: props.class, role: 'img', 'aria-label': props.ariaLabel,
        innerHTML: `<path d="M6.75 9.75v10.5a1.5 1.5 0 0 0 1.5 1.5H15a1.5 1.5 0 0 0 1.5-1.5V9.75m-9.75 0h9.75m-9.75 0a1.23 1.23 0 0 1-1.206-1.47l.965-4.824a1.5 1.5 0 0 1 1.47-1.206h7.291a1.5 1.5 0 0 1 1.471 1.206l.059.294m-.3 6a1.23 1.23 0 0 0 1.206-1.47l-.156-.78m-.75-3.75h1.575a1.875 1.875 0 1 1 0 3.75h-.825m-.75-3.75.75 3.75"/>`,
      }, children);
    };
  },
});
