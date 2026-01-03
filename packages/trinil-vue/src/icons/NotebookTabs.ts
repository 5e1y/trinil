import { defineComponent, h } from 'vue';

export const NotebookTabs = defineComponent({
  name: 'NotebookTabs',
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
        innerHTML: `<path d="M5.25 18v2.25a1.5 1.5 0 0 0 1.5 1.5h9M5.25 18v-6m0 6h-1.5m1.5 0H7.5m-2.25-6V6m0 6h-1.5m1.5 0H7.5M5.25 6V3.75a1.5 1.5 0 0 1 1.5-1.5h9M5.25 6h-1.5m1.5 0H7.5m8.25-3.75h3a1.5 1.5 0 0 1 1.5 1.5V7.5m-4.5-5.25V7.5m0 14.25h3a1.5 1.5 0 0 0 1.5-1.5V18m-4.5 3.75V18m0 0h4.5m-4.5 0v-5.25m4.5 5.25v-5.25m-4.5 0h4.5m-4.5 0V7.5m4.5 5.25V7.5m-4.5 0h4.5"/>`,
      }, children);
    };
  },
});
