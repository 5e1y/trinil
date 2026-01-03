import { defineComponent, h } from 'vue';

export const FolderPlus = defineComponent({
  name: 'FolderPlus',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M21.75 12.387V8.25a1.5 1.5 0 0 0-1.5-1.5h-6.257a3 3 0 0 1-2.122-.879L10.63 4.63a3 3 0 0 0-2.122-.879H3.75a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5h7.884m6.741 2.25v-4.125m0 0V14.25m0 4.125H22.5m-4.125 0H14.25"/>`,
      }, children);
    };
  },
});
