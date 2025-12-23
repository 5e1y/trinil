import { defineComponent, h } from 'vue';

export const Road = defineComponent({
  name: 'Road',
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
        innerHTML: `<path d="M5 21v-6C5 9.477 9.477 5 15 5h6m0 8h-6a2 2 0 0 0-2 2v6m-4 0v-2m0-2v-2m.341-2a6 6 0 0 1 1.004-1.786m1.515-1.328A6 6 0 0 1 14 9.083M16 9h2m2 0h1"/>`,
      }, children);
    };
  },
});
