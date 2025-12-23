import { defineComponent, h } from 'vue';

export const NotebookTabs = defineComponent({
  name: 'NotebookTabs',
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
        innerHTML: `<path d="M6 18v1a2 2 0 0 0 2 2h8M6 18v-3m0 3H4.5M6 18h1.5M6 15v-3m0 3H4.5M6 15h1.5M6 12V9m0 3h1.5M6 12H4.5M6 9V6m0 3H4.5M6 9h1.5M6 6V5a2 2 0 0 1 2-2h8M6 6h1.5M6 6H4.5M16 3h1a2 2 0 0 1 2 2v1m-3-3v3m0 15h1a2 2 0 0 0 2-2v-1m-3 3v-3m0-12h3m-3 0v3m3-3v3m-3 0h3m-3 0v3m3-3v3m-3 0h3m-3 0v3m3-3v3m-3 0h3m-3 0v3m3-3v3m-3 0h3"/>`,
      }, children);
    };
  },
});
